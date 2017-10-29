'use strict';

describe('GET /usuario/facebook/:id', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);

  describe('status 200', () => {
    it('Retorna um cadastro.', (done) => {
      let id_200 = 100001718509097;
      request.get('/usuario/facebook/' + id_200)
        .expect(200)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe('status 400', () => {
    it('ID facebook inválido.', (done) => {
      let id_400 = 1000017185090971234567;
      request.get('/usuario/facebook/' + id_400)
        .expect(400, done);
    });
  });

  describe('status 404', () => {
    it('Não retorna cadastro.', (done) => {
      let id_404 = '000';
      request.get('/usuario/facebook/' + id_404)
        .expect(404, done);
    });
  });
});
