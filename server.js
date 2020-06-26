// Imports
const express = require('express');
const PORT = process.env.port || 3030;
const app = express();

// App Configuration
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// TODO: Wrap the following function in a connection to the MySQL DB
app.listen(PORT, ()=> {
	console.log('App listening on port ' + PORT + '! :^)')
})