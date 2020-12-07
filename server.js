// Imports
const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();
const routes = require('./routes');
const connection = require('./config/connection.js');

// App Configuration
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/getAnts', function(req,res){
	connection.query('SELECT antagonist FROM present_tense', function(err,res){
		if(err) throw err;

		console.log(res);
		connection.end
	})
})

app.use(routes)
app.listen(PORT, ()=> {
	console.log('App listening on port ' + PORT + '! :^)')
})


