// Imports
const express = require('express');
const PORT = process.env.port || 3030;
const app = express();

const connection = require('./config/connection.js');

// App Configuration
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/getAnts', function(req,res){
	connection.query('SELECT antagonist FROM present_tense', function(err,res){
		if(err) throw err;

		console.log(res);
		connection.end
	})
})

app.listen(PORT, ()=> {
	console.log('App listening on port ' + PORT + '! :^)')
})


