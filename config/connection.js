// const mysql = require('mysql');
const Sequelize = require('sequelize');

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: 'root',
// 	database: 'adHooks',
// 	multipleStatements: true
// });
let sequelize = null;
if(process.env.JAWSDB_URL){
	sequelize = new Sequelize(process.env.JAWSDB_URL, {dialect: 'mysql'})

}
else{
	sequelize = new Sequelize("adventure_hooks_db", "root", "root", {
		host: 'localhost',
		port: 3306,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000



		}
	})
}

// connection.connect(function(err){
// 	if(err) throw err;
// 	console.log('connected as id' + connection.threadId)
// });

// module.exports = connection;
module.exports = sequelize;