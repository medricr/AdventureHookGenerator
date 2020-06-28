
const expect = require('chai').expect;
var assert = require('assert');
const connection = require('../config/connection.js');

describe("canary test", function () {
	// A "canary" test is one we set up to always pass
	// This can help us ensure our testing suite is set up correctly before writing real tests
	it("should pass this canary test", function () {
		expect(true).to.be.true;
	});
});

// Test basic query
// describe('Query Test', function(){
// 	let result = [];
// 	connection.query('SELECT antagonist FROM present_tense', function (err, res) {
// 		if (err) throw err;
// 		result = res;
// 		connection.end
// 	})

// 	it("should return three values", function(){
// 		assert.equal(result.length, 3)
// 	})
// })

// Test random selection of one element from a column
describe ('Random Selection Test (one element)', function(){
	let random_sel = [];

	connection.query('SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1', function(err, res){
		if(err) throw err;
		// console.log(res)
		random_sel = res;
		connection.end;
	})

	it("should only return 1 value, randomly selected from the specified column", function(){
		assert.equal(random_sel.length, 1);
	})
})

describe ('Random Selection Test (three elements)', function(){
	let random_sels = [];
	connection.query(
		'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
		function(err,res){
			if(err) throw err;
			console.log( 'multi select result => ', res);
			random_sels = res;
			// console.log('random column selections => ' + random_sels)
			connection.end;
		}
	)

	it("should return three values, randomly selected from each column in the table", function(){
		assert.equal(random_sels.length,3)
	})
})