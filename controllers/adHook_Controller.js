// TODO: Create controller for the creation of an adventure hook, multiple adventure hooks, or for the retrieval of just antagonists / sources of info/ and threats
const Sequelize = require('sequelize');
const db = require('../models');

module.exports = {
	generate_hook: function(req,res){	
		let queryTable = db[req.query.table];
		let final_string = "";
		
		queryTable.findAll({
			order: Sequelize.literal('rand()'), limit: 3,
		}).then((results) => {
			console.log(results);
			console.log("final_string no edit -> ", final_string);
			final_string = results[0].info_source + results[1].antagonist + results[2].threat;
			console.log("final_string post edit -> ", final_string);
			res.json(final_string)
		})		
	},
	generate_multiple: function(req,res){
		let queryTable = db[req.query.table];
		let string_one = "";
		let string_two = "";
		let string_three = "";
		let final_string_array = [];

		queryTable.findAll({
			order: Sequelize.literal('rand()'), limit: 3,
		}).then((results) => {
			console.log(results);
			string_one = results[0].info_source + results[1].antagonist + results[2].threat;
			string_two = results[1].info_source + results[2].antagonist + results[0].threat;
			string_three = results[2].info_source + results[0].antagonist + results[1].threat;
			final_string_array.push(string_one, string_two, string_three);
			res.json(final_string_array);
		})
	}
}