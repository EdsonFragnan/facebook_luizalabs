"use strict";

const logger = require('../servicos/logger.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  logger.info('consultando: ' + id);
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  usuarioDao.buscaPorId(id, (erro, resultado) => {
    if (erro) {
      console.log('Erro de consulta');
      res.status(412).json();
      return;
    } else if (resultado.length === 0) {
      res.status(204).json({msg: 'Não possui registros.'});
      return;
    } else {
      res.json(resultado);
      return;
    }
  });
  connection.end();
};
