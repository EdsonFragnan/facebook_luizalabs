'use strict';

describe('POST /usuarios/usuario/:id', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
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
    usuarioDao.deleta(100001718509097, () => {
      done();
    });
  });

  describe('status 200', () => {
    it('Sucesso.', (done) => {
      let id_200 = 100001718509097;
      request.post('/usuarios/usuario/' + id_200)
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

  describe('status 404', () => {
    it('Usuário não encontrado.', (done) => {
      let id_404 = '000';
      request.post('/usuario/usuario/' + id_404)
        .expect(404, done);
    });
  });

  describe('status 412', () => {
    it('Usuário duplicado.', (done) => {
      after((done) => {
        usuarioDao.salva(objeto, () => {
          done();
        });
      });
      let id_412 = 100001718509097;
      request.post('/usuarios/usuario/' + id_412)
        .expect(412, done);
    });
  });

});
