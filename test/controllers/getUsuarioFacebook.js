"use strict";

describe('GET /usuario/facebook/:id', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  let id = '100001718509097';

  describe("status 200", () => {
    it("Retorna um cadastro.", (done) => {
      let id_200 = 100001718509097;
      request.get('/usuario/facebook/' + id_200)
        .expect(200)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe("status 404", () => {
    it('Não retorna cadastro.', (done) => {
      let id_404 = '000';
      request.get('/usuario/facebook/' + id_404)
        .expect(404, done);
    });
  });
});
