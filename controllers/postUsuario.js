"use strict";

const logger = require('../servicos/logger.js');
const validacaoCampos = require('./../validacao/validacao.js');
const facebook_acesso = require('./../processor/facebook.js');

module.exports = (app, req, res) => {
  const id = req.params.id;
  const connection = app.persistencia.connectionFactory();
  const UsuarioDao = new app.persistencia.UsuarioDao(connection);
  logger.info('cadastrando: ' + id);
  facebook_acesso.processor(id, (error, usuario) => {
    if (error) {
      console.log('Usuário facebook não encontrado.');
      res.status(404).json();
      return;
    } else {
      const erros = validacaoCampos.validacao(req, usuario);
      if (erros) {
        console.log('Erros de validacão encontrados.');
        res.status(400).send(erros);
        return;
      } else {
        UsuarioDao.salva(usuario, (erro, resultado) => {
          if (erro) {
            console.log('Erro de consulta: ' + erro);
            res.status(412).json();
            return;
          } else {
            console.log('Usuário inserido na base.');
            res.json(usuario);
            return;
          }
        });
      }
    }
  });
};
