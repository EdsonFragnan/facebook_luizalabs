"use strict";

describe('GET /usuarios', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  let id = '100001718509097';

  before((done) => {
    let objeto = {
      username: "Edson Fragnan",
      facebookId: id,
      name: "Edson Fragnan",
      gender: "não especificado"
    };
    usuarioDao.salva(objeto, () => {
      done();
    });
  });

  describe('status 200', () => {
    it('Retorna os cadastros', (done) => {
      request.get('/usuarios')
      .send({})
      .expect(200,done);
    });
  });

  describe('status 204', () => {
    before((done) => {
      usuarioDao.deleta(id, () => {
        done();
      });
    });
    it('Não retorna os cadastros.', (done) => {
      request.get('/usuarios')
      .send({})
      .expect(204, done);
    });
  });
});
