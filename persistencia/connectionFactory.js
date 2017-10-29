'use strict';

const mysql  = require('mysql');
const logger = require('./../servicos/logger.js');

const createDBConnection = () => {
	let database = '';
	if (process.env.NODE_ENV !== undefined) {
		database = 'facebook_luizalabs_test';
	} else {
		database = 'facebook_luizalabs';
	}
	logger.info('Base de dados acessada: ' + database);
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		driver: 'mysql',
		database: database
	});
};

module.exports = () => {
	return createDBConnection;
};


