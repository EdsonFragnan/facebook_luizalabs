'use strict';

describe('GET /usuarios', (done) => {
  const connection = app.persistencia.connectionFactory();
  const usuarioDao = new app.persistencia.UsuarioDao(connection);
  let objeto = {
    facebookId: '100001718509097',
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
    
  describe('status 200', () => {
    beforeEach((done) => {
      usuarioDao.salva(objeto, () => {
        done();
      });
    });
    it('Retorna os cadastros', (done) => {
      request.get('/usuarios')
      .send({})
      .expect(200,done);
    });
  });

  describe('status 204', () => {
    beforeEach((done) => {
      usuarioDao.deleta(100001718509097, () => {
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
