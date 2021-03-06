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
    usuarioDao.buscaPorId(id, (erro, resultado) => {
      if (erro) {
        logger.info(erro);
        res.status(412).json();
        return;
      } else if (resultado.length === 0) {
        logger.info('Não possui registros.');
        res.status(204).json({msg: 'Não possui registros.'});
        return;
      } else {
        res.json(resultado);
        return;
      }
    });
    connection.end();
  }
};
