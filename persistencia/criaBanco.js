'use strict';

const mysql  = require('mysql');
const logger = require('./../servicos/logger.js');
const criaTabela = require('./criaTabela');

module.exports = (app) => {

	let teste = 'facebook_luizalabs_test';
	let dev = 'facebook_luizalabs';
	let banco = '';
	if (process.env.NODE_ENV !== undefined) {
	  banco = teste;
	} else {
	  banco = dev;
	}

	const conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		driver: 'mysql',
	});

	conn.query('CREATE DATABASE IF NOT EXISTS ' + banco, function (err, result) {
  		if (err) throw err;
  		criaTabela(app);
		logger.info('Banco de dados criado: ' + banco);
		return;
	});
};
