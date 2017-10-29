'use strict';

describe('GET /usuarios/usuario/:id', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  let id = 100001718509097;
  let objeto = {
    facebookId: "100001718509097",
    first_name: 'Edson',
    middle_name: 'Luiz',
    last_name: 'Fragnan',
    name: 'Edson Fragnan',
    birthday: 'não especificado',
    hometown: 'não especificado',
    locale: 'não especificado',
    gender: 'não especificado',
    public_key: 'não especificado',
    website: 'não especificado'
  };


  before((done) => {
    usuarioDao.salva(objeto, () => {
      done();
    });
  });

  describe('status 200', () => {
    it('Retorna um cadastro.', (done) => {
      request.get('/usuarios/usuario/' + id)
        .expect(200, done);
    });
  });

  describe('status 400', () => {
    it('ID facebook inválido.', (done) => {
      let id_400 = 100001718509097000000;
      request.get('/usuarios/usuario/' + id_400)
        .expect(400, done);
    });
  });

  describe('status 204', () => {
    it('Não retorna cadastro.', (done) => {
      let id_204 = '000';
      request.get('/usuarios/usuario/' + id_204)
        .expect(204, done);
    });
  });
});
