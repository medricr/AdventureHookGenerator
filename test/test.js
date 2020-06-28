
const expect = require('chai').expect;
var assert = require('assert');
const connection = require('../config/connection.js');

describe("canary test", function () {
	// A "canary" test is one we set up to always pass
	// This can help us ensure our testing suite is set up correctly before writing real tests
	it("should pass this canary test", function () {
		expect(true).to.be.true;
	});
});

describe('Query Test', function(){
	let result = [];
	connection.query('SELECT antagonist FROM present_tense', function (err, res) {
		if (err) throw err;
		result = res;
		connection.end
	})

	it("should return three values", function(){
		assert.equal(result.length, 3)
	})
})