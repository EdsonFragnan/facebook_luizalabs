'use strict';

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');
const facebook_acesso = require('./../processor/facebook.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  const connection = app.persistencia.connectionFactory();
  const UsuarioDao = new app.persistencia.UsuarioDao(connection);
  const erros = validacaoCampos.validacao(req, id);
  if (erros) {
    logger.info(erros);
    res.status(400).send(erros);
    return;
  } else {
    facebook_acesso.processor(id, (error, usuario) => {
      if (error) {
        logger.info(error);
        res.status(404).json();
        return;
      } else {
        UsuarioDao.salva(usuario, (erro, resultado) => {
          if (erro) {
            logger.info(erro);
            res.status(412).json();
            return;
          } else {
            logger.info('Usuário inserido na base.');
            res.json(usuario);
            return;
          }
        });
      }
    });
  }
};
