'use strict';

const logger = require('../servicos/logger.js');
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
   *        "facebookId": "100001718509097",
   *        "first_name": "Edson",
   *        "middle_name": "Luiz",
   *        "last_name": "Fragnan",
   *        "name": "Edson Fragnan",
   *        "birthday": "não especificado",
   *        "hometown": "não especificado",
   *        "locale": "não especificado",
   *        "gender": "não especificado",
   *        "public_key": "não especificado",
   *        "website": "não especificado"
   *    }]
   * @apiErrorExample {json} Erro de consulta
   *    HTTP/1.1 412
   * @apiErrorExample {json} Não possui registros.
   *    HTTP/1.1 204
   */
  app.get('/usuarios', (req, res) => {
    logger.info('Rota acessada: /usuarios - GET');
    ctrlGetUsuarios(app, res);
  });

  /**
   * @api {get} /usuarios/usuario/:id Exibe um usuário
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    { 
   *        "facebookId": "100001718509097",
   *        "first_name": "Edson",
   *        "middle_name": "Luiz",
   *        "last_name": "Fragnan",
   *        "name": "Edson Fragnan",
   *        "birthday": "não especificado",
   *        "hometown": "não especificado",
   *        "locale": "não especificado",
   *        "gender": "não especificado",
   *        "public_key": "não especificado",
   *        "website": "não especificado"
   *    }
   * @apiErrorExample {json} Erro de consulta
   *    HTTP/1.1 412
   * @apiErrorExample {json} Não possui registros.
   *    HTTP/1.1 204
   */
  app.get('/usuarios/usuario/:id', (req, res) => {
    logger.info('Rota acessada: /usuarios/usuario/:id - GET');
    ctrlGetUsuario(app, req, res);
  });

  /**
   * @api {get} /usuarios/facebook/:id Exibe um usuário direto no facebook
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *        "facebookId": "100001718509097",
   *        "first_name": "Edson",
   *        "middle_name": "Luiz",
   *        "last_name": "Fragnan",
   *        "name": "Edson Fragnan",
   *        "birthday": "não especificado",
   *        "hometown": "não especificado",
   *        "locale": "não especificado",
   *        "gender": "não especificado",
   *        "public_key": "não especificado",
   *        "website": "não especificado"
   *    }
   * @apiErrorExample {json} Usuário não encontrado no facebook.
   *    HTTP/1.1 404
   */
  app.get('/usuario/facebook/:id', (req, res) => {
    logger.info('Rota acessada: /usuario/facebook/:id - GET');
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
    logger.info('Rota acessada: /usuarios/usuario/:id - DELETE');
    ctrlDelUsuario(app, req, res);
  });

  /**
   * @api {POST} /usuarios/usuario/:id Cadastrar um usuário na base de dados
   * @apiGroup Usuario
   * @apiSuccess {String} id id de registro
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {
   *        "facebookId": "100001718509097",
   *        "first_name": "Edson",
   *        "middle_name": "Luiz",
   *        "last_name": "Fragnan",
   *        "name": "Edson Fragnan",
   *        "birthday": "não especificado",
   *        "hometown": "não especificado",
   *        "locale": "não especificado",
   *        "gender": "não especificado",
   *        "public_key": "não especificado",
   *        "website": "não especificado"
   *    }
   * @apiErrorExample {json} Usuário facebook não encontrado.
   *    HTTP/1.1 404
   * @apiErrorExample {json} Erros de validacão encontrados.
   *    HTTP/1.1 400
   * @apiErrorExample {json} Erro ao inserir no banco.
   *    HTTP/1.1 412
   */
  app.post('/usuarios/usuario/:id', (req, res) => {
    logger.info('Rota acessada: /usuarios/usuario/:id - POST');
    ctrlPostUsuario(app, req, res);
  });

};
