'use strict';

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const logger = require('../servicos/logger.js');

module.exports = () => {
  const app = express();

  app.use(morgan("common", {
    stream: {
      write: (mensagem) => {
          logger.info(mensagem);
      }
    }
  }));

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(express.static('public'));

  consign({verbose: false})
   .include('routes')
   .then('persistencia')
   .then('servicos')
   .into(app);

  app.use((req, res, next) => {
    res.status(404).json({msg: 'Rota não encontrada.'});
  });

  app.use((error, req, res, next) => {
    res.status(500).json({msg: 'Erro interno no servidor.'});
  });

  return app;
};
