const path = require('path');
const port = process.env.PORT || 3030;

module.exports = {
	outputDir: path.resolve(__dirname, '../server/public'),
	devServer: {
		proxy: {
			'/': {
				target: `http://localhost:${port}`
			}
		}
	}
}