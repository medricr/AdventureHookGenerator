const Sequelize = require('sequelize');

const sequelize = require('../config/connection.js');

const adHook = sequelize.define('adHook', {
	info_source: Sequelize.STRING,
	antagonist: Sequelize.STRING,
	threat: Sequelize.STRING
},{
	createdAt: false,
	updatedAt: false
})

adHook.sync();

module.exports = adHook;