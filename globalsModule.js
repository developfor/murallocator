'use strict';

var chromedriver = require( 'chromedriver' );
var shell = require('shelljs');

module.exports = {
	before: function ( done ) {
		chromedriver.start();

		done();
	},

	after: function ( done ) {
		chromedriver.stop();

		done();
	}
};