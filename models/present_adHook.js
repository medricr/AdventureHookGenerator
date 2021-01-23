const Sequelize = require('sequelize');

const sequelize = require('../config/connection.js');

const present_adHook = sequelize.define('present_adHook', {
	info_source: Sequelize.STRING,
	antagonist: Sequelize.STRING,
	threat: Sequelize.STRING
},{
	createdAt: false,
	updatedAt: false
})

present_adHook.sync();

module.exports = present_adHook;