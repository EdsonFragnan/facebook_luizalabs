"use strict";

const mysql  = require('mysql');

const createDBConnection = () => {
		let database = '';
		if (process.env.NODE_ENV !== undefined) {
			database = 'facebook_luizalabs_test';
		} else {
			database = 'facebook_luizalabs';
		}

		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			driver: 'mysql',
			database: database
		});
};

module.exports = function() {
	return createDBConnection;
};
