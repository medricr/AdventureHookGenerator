
const expect = require('chai').expect;
var assert = require('assert');
const connection = require('../config/connection');
const { end } = require('../config/connection');

describe("canary test", function () {
	// A "canary" test is one we set up to always pass
	// This can help us ensure our testing suite is set up correctly before writing real tests
	it("should pass this canary test", function () {
		expect(true).to.be.true;
	});
});

// Test random selection of one element from a column
describe ('Random Selection Test (one element)', function(){
	let random_sel = [];

	connection.query('SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1', function(err, res){
		if(err) throw err;
		// console.log(res)
		random_sel = res;
		end;
	})

	it("should only return 1 value, randomly selected from the specified column", function(){
		assert.equal(random_sel.length, 1);
	})
})

// Test random selection of one element from each column in table
describe ('Random Selection Test (three elements)', function(){
	let random_sels = [];
	connection.query(
		'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
		function(err,res){
			if(err) throw err;
		
			random_sels = res;
			// console.log('random column selections => ' + random_sels)
			connection.end;
		}
	)

	it("should return three values, randomly selected from each column in the table", function(){
		assert.equal(random_sels.length,3)
		console.log('multi select result => ', random_sels);
	})
})

// Test concatenation of elements into a single string
// ! BAD TEST - Will always pass because final string is initialized as a string, checking whether or not it is typeof string is redundant
describe ('String Builder Test', function(req, res){
	let final_string = "";
	connection.query(
		// 'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
		'SELECT info_source, antagonist, threat FROM present_tense ORDER BY RAND() LIMIT 1',
		function (err, res) {
			if (err) throw err;
			// final_string = final_string + res[0][0].info_source + res[1][0].antagonist + res[2][0].threat
			final_string = final_string + res[0].info_source + res[0].antagonist + res[0].threat
			// console.log("string builder result -> ", fields)

			
			connection.end;
		}
	)

	res.json(final_string)

	it("Should concatenate all results into a single string", function(){
		assert.equal(typeof final_string, 'string')
		console.log('final constructed string -> ' + final_string)
		
	})
})

// ! Sometimes this function produces 4 results, and sometimes it produces 5. In addition, sometimes the results giver are almost too similar, as if the result from one query is being put into several different instances of temp_string. Setting the function inside the query as an async function seems to solve the issue, but im not sure exactly why
describe ('Multi Hook Generator', function(){
	let temp_string = "";
	let final_string_array = [];
	let number_of_times = 5;
	
	for(i=0; i<number_of_times; i++){
		 connection.query(
			'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
		  function (err, res) {
				if (err) throw err;
				temp_string = temp_string + res[0][0].info_source + res[1][0].antagonist + res[2][0].threat

				// console.log('final constructed string -> ' + temp_string)
				final_string_array.push(temp_string);
				temp_string = "";
				connection.end;
			}
		)
	}

	it("should produce a number of adventure hooks equal to the user specified number, in this case 5", function(){
		
		assert.equal(final_string_array.length, 5)
		console.log(final_string_array);
	})
})

// TODO: Test selection of one element from y, where y is a user specified column
describe('Column Selection Test', function(){
	let column_sel = [];
	let col = 'antagonist '
	let sql_query = 'SELECT ' + col + 'FROM present_tense ORDER BY RAND() LIMIT 1';

	connection.query(sql_query, function(err, res){
		if(err) throw err;

		column_sel.push(res);

		connection.end;
	})

	it('Should return a result from a single user specified column, in this case the antagonist column', function(){
		assert.equal(column_sel.length, 1);
		console.log(column_sel);
	})
})

// TODO: Test selection of x elements from a column, where x is a user specified integer
describe('Multi Pull', function(){
	let multi = [];
	let num_of_records = '4'
	let queryString = 'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT ' + num_of_records;

	connection.query(queryString, function(err, res){
		if(err) throw err;

		multi = res;

		connection.end
	})

	it("Should retrieve a number of records equal to a user specified number, passed in as a prameter. In this case, that number is 4", function () {
		assert.equal(multi.length, 4)
		console.log(multi);

	})
})

