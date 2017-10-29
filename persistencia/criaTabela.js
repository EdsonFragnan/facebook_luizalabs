'use strict';

const logger = require('./../servicos/logger.js');

module.exports = (app) => {
  const connection = app.persistencia.connectionFactory();
  const createTable = (connection) => {
    const sql = 'CREATE TABLE IF NOT EXISTS usuario (\n'+
        'facebookId VARCHAR(50) NOT NULL,\n'+
        'first_name VARCHAR(50) NOT NULL,\n'+
        'middle_name VARCHAR(50) NOT NULL,\n'+
        'last_name VARCHAR(50) NOT NULL,\n'+
        'name VARCHAR(50) NOT NULL,\n'+
        'birthday VARCHAR(50) NOT NULL,\n'+
        'hometown VARCHAR(50) NOT NULL,\n'+
        'locale VARCHAR(50) NOT NULL,\n'+
        'gender VARCHAR(50) NOT NULL,\n'+
        'public_key VARCHAR(50) NOT NULL,\n'+
        'website VARCHAR(100) NOT NULL,\n'+
        'PRIMARY KEY (facebookId)\n'+
        ')';

    connection.query(sql, (error, results, fields) => {
      if(error) return logger.info(error);
      logger.info('Tabela usuario criada.');
    });
  };
  createTable(connection);
};
