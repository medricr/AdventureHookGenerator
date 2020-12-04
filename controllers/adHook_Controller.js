// TODO: Create controller for the creation of an adventure hook, multiple adventure hooks, or for the retrieval of just antagonists / sources of info/ and threats

const connection = require('../config/connection')

const adHook = require("../models/adHook.js")

module.exports = {
	generate_hook:  function(req,res){
	

			let final_string = "";
		
				adHook.findAll({}).then((results) => {
					console.log(results); 
					console.log("final_string no edit -> ", final_string); 
					final_string = results[0].info_source;
					console.log("final_string post edit -> ", final_string);
					res.json(final_string)

				})

	},

	// ! ARRAY IS CLEARED UPON EXITING FOR LOOP?
	generate_multiple: function(req,res){
		let temp_string = "";
		let final_string_array = [];
		let number_of_times = 5;

		for (i = 0; i < number_of_times; i++) {
			connection.query(
				'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
				function (err, res) {
					if (err) throw err;
					temp_string = temp_string + res[0][0].info_source + res[1][0].antagonist + res[2][0].threat

					// console.log('final constructed string -> ' + temp_string)
					final_string_array.push(temp_string);
					// console.log(final_string_array.length)
					temp_string = "";
					connection.end;
				}
			)
		}


		res.json(final_string_array)
		// console.log(final_string_array)
	}
}