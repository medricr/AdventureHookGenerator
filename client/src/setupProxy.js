const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		proxy([
			'/generateOne'
		], {target: 'http://localhost:3030'})
	)
}