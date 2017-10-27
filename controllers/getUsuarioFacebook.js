"use strict";

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');
const facebook_acesso = require('./../processor/facebook.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  logger.info('consultando: ' + id);
  facebook_acesso.processor(req.params.id, (error, usuario) => {
    if (error) {
      console.log('Usuário não encontrado no facebook.');
      res.status(404).json();
      return;
    } else {
      res.json(usuario);
      return;
    }
  });
};
