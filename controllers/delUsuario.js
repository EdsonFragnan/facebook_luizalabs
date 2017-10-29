'use strict';

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  const erros = validacaoCampos.validacao(req, id);
  if (erros) {
    logger.info(erros);
    res.status(400).send(erros);
    return;
  } else {
    usuarioDao.deleta(id, (erro) => {
      if (erro) {
        logger.info(erro);
        res.status(404).json();
        return;
      }
      logger.info('Usuário deletado.');
      res.status(204).json();
      return;
    });
    connection.end();
  }
};
