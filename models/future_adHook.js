const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const future_adHook = sequelize.define('future_adHook', {
	info_source: Sequelize.STRING,
	antagonist: Sequelize.STRING,
	threat: Sequelize.STRING
}, {
	createdAt: false,
	updatedAt: false
})

future_adHook.sync();
module.exports = future_adHook;