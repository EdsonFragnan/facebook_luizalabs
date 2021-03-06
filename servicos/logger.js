'use strict';

const winston = require('winston');
const fs = require('fs');

if(!fs.existsSync('logs')){
  fs.mkdirSync('logs');
}

module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/facebook_luizalabs.log',
      maxsize: 100000,
      maxFiles: 10
    })
  ]
});
