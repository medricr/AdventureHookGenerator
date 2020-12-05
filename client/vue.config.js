const path = require('path');
const port = process.env.PORT || 3030;

module.exports = {
	outputDir: path.resolve(__dirname, '../public'),
	devServer: {
		proxy: {
			'/': {
				target: `http://localhost:${port}`
			}
		}
	}
}