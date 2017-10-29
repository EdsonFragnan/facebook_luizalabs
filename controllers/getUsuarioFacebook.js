'use strict';

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');
const facebook_acesso = require('./../processor/facebook.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  const erros = validacaoCampos.validacao(req, id);
  if (erros) {
    logger.info(erros);
    res.status(400).send(erros);
    return;
  } else {
    facebook_acesso.processor(req.params.id, (error, usuario) => {
      if (error) {
        logger.info(error);
        res.status(404).json();
        return;
      } else {
        res.json(usuario);
        return;
      }
    });
  }
};
