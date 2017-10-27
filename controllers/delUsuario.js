"use strict";

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  logger.info('deletando: ' + id);
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  usuarioDao.deleta(id, (erro) => {
    if (erro) {
      console.log('Usuário não encontrado no banco: ' + erro);
      res.status(404).json();
      return;
    }
    console.log('Usuário deletado.');
    res.status(204).json();
    return;
  });
  connection.end();
};
