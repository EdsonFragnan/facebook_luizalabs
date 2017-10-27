"use strict";

describe('GET /usuarios/usuario/:id', (done) => {
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

  after((done) => {
      usuarioDao.deleta(id, () => {
        done();
      });
  });

  describe("status 200", () => {
    it("Retorna um cadastro.", (done) => {
      request.get('/usuarios/usuario/' + id)
        .expect(200, done);
    });
  });

  describe("status 204", () => {
    it('Não retorna cadastro.', (done) => {
      let id_204 = '000';
      request.get('/usuarios/usuario/' + id_204)
        .expect(204, done);
    });
  });
});
