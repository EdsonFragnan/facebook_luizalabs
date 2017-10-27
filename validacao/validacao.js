"use strict";

module.exports.validacao = (req, campo) => {
  req.body = campo;
  req.assert('facebookId','Identificador facebook é obrigatório.').notEmpty();
  req.assert('name', 'Nome é obrigatório.').notEmpty();
  req.assert('username', 'Username é obrigatório.').notEmpty();
  req.assert('gender', 'Genero é obrigatório.').notEmpty();
  return req.validationErrors();
};
