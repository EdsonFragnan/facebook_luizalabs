"use strict";

module.exports = (app) => {
  const connection = app.persistencia.connectionFactory();
  const createTable = (connection) => {
    const sql = 'CREATE TABLE IF NOT EXISTS usuario (\n'+
         'facebookId VARCHAR(255) NOT NULL,\n'+
         'name VARCHAR(255) NOT NULL,\n'+
         'username VARCHAR(255) NOT NULL,\n'+
         'gender VARCHAR(255) NOT NULL,\n'+
         'PRIMARY KEY (facebookId)\n'+
         ')';

    connection.query(sql, (error, results, fields) => {
        if(error) return console.log(error);
    });
  };
  createTable(connection);
};
