'use strict';

module.exports.validacao = (req, id) => {
  req.body = {'facebookId': id};
  req.assert('facebookId','Identificador facebook inválido.').isLength({max: 20});
  return req.validationErrors();
};
