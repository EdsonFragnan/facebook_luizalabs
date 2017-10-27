"use strict";

const ctrlGetUsuarios = require('./../controllers/getUsuarios');
const ctrlGetUsuario = require('./../controllers/getUsuario');
const ctrlGetUsuarioFacebook = require('./../controllers/getUsuarioFacebook');
const ctrlDelUsuario = require('./../controllers/delUsuario');
const ctrlPostUsuario = require('./../controllers/postUsuario');

module.exports = (app) => {

  /**
   * @api {get} /usuarios Exibe uma lista usuários
   * @apiGroup Usuario
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    [{
   *       "facebookId": "100001718509097",
   *       "name": "Edson Fragnan",
   *       "username": "Edson Fragnan",
   *       "gender": "não especificado"
   *    }]
   * @apiErrorExample {json} Erro de consulta
   *    HTTP/1.1 412
   * @apiErrorExample {json} Não possui registros.
   *    HTTP/1.1 204
   */
  app.get('/usuarios', (req, res) => {
    ctrlGetUsuarios(app, res);
  });

  /**
   * @api {get} /usuarios/usuario/:id Exibe um usuário
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *       "facebookId": "100001718509097",
   *       "name": "Edson Fragnan",
   *       "username": "Edson Fragnan",
   *       "gender": "não especificado"
   *    }
   * @apiErrorExample {json} Erro de consulta
   *    HTTP/1.1 412
   * @apiErrorExample {json} Não possui registros.
   *    HTTP/1.1 204
   */
  app.get('/usuarios/usuario/:id', (req, res) => {
    ctrlGetUsuario(app, req, res);
  });

  /**
   * @api {get} /usuarios/facebook/:id Exibe um usuário direto no facebook
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *       "facebookId": "100001718509097",
   *       "name": "Edson Fragnan",
   *       "username": "Edson Fragnan",
   *       "gender": "não especificado"
   *    }
   * @apiErrorExample {json} Usuário não encontrado no facebook.
   *    HTTP/1.1 404
   */
  app.get('/usuario/facebook/:id', (req, res) => {
    ctrlGetUsuarioFacebook(app, req, res);
  });

  /**
   * @api {DELETE} /usuarios/usuario/:id Deleta um usuário da base de dados
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 204 OK
   * @apiErrorExample {json} Usuário não encontrado no banco.
   *    HTTP/1.1 404
   */
  app.delete('/usuarios/usuario/:id', (req, res) => {
    ctrlDelUsuario(app, req, res);
  });

  /**
   * @api {POST} /usuarios/usuario/:id Cadastrar um usuário na base de dados
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *       "facebookId": "100001718509097",
   *       "name": "Edson Fragnan",
   *       "username": "Edson Fragnan",
   *       "gender": "não especificado"
   *    }
   * @apiErrorExample {json} Usuário facebook não encontrado.
   *    HTTP/1.1 404
   * @apiErrorExample {json} Erros de validacão encontrados.
   *    HTTP/1.1 400
   * @apiErrorExample {json} Erro ao inserir no banco.
   *    HTTP/1.1 412
   */
  app.post('/usuarios/usuario/:id', (req, res) => {
    ctrlPostUsuario(app, req, res);
  });

};
