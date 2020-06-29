// TODO: Create controller for the creation of an adventure hook, multiple adventure hooks, or for the retrieval of just antagonists / sources of info/ and threats

const connection = require('../config/connection')

module.exports = {
	generate_hook: function(req,res){
		let final_string = "";
		connection.query(
			'SELECT info_source FROM present_tense ORDER BY RAND() LIMIT 1; SELECT antagonist FROM present_tense ORDER BY RAND() LIMIT 1; SELECT threat FROM present_tense ORDER BY RAND() LIMIT 1',
			function (err, res) {
				if (err) throw err;
				final_string = final_string + res[0][0].info_source + res[1][0].antagonist + res[2][0].threat

				console.log('final constructed string -> ' + final_string)
				connection.end;
			}
		)

		res.json(final_string);
	}
}