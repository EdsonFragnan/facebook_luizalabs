"use strict";

describe('POST /usuarios/usuario/:id', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  let id = '100001718509097';

  before((done) => {
    usuarioDao.deleta(id, () => {
      done();
    });
  });

  it("status 200", (done) => {
    let id_200 = 100001718509097;
    request.post('/usuarios/usuario/' + id_200)
      .expect(200, done);
  });

  it('status 404', (done) => {
    let id_404 = '000';
    request.post('/usuario/facebook/' + id_404)
      .expect(404, done);
  });
});
