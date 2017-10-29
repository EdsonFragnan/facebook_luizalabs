'use strict';

describe('DELETE /usuarios/usuario/:id', (done) => {
  
  describe('status 204', () => {
    it('Usuario deletado com sucesso.', (done) => {
      let id_200 = 100001718509097;
      request.delete('/usuarios/usuario/' + id_200)
        .expect(204, done);
    });
  });

  describe('status 400', () => {
    it('ID facebook inválido.', (done) => {
      let id_400 = 1000017185090971234567;
      request.delete('/usuarios/usuario/' + id_400)
        .expect(400, done);
    });
  });

  describe('status 404', () => {
    it('Erro ao deletar um usuário.', (done) => {
      let id_404 = '000';
      request.delete('/usuario/facebook/' + id_404)
        .expect(404, done);
    });
  });
});
