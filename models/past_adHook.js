const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const past_adHook = sequelize.define('past_adHook', {
	info_source: Sequelize.STRING,
	antagonist: Sequelize.STRING,
	threat: Sequelize.STRING
}, {
	createdAt: false,
	updatedAt: false
})

past_adHook.sync();
module.exports = past_adHook;