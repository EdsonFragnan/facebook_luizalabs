"use strict";

describe("DELETE /usuarios/usuario/:id", (done) => {
  const DatabaseCleaner = require('database-cleaner');
  const databaseCleaner = new DatabaseCleaner('mysql');
  let id = '100001718509097';

  describe("status 204", () => {
    it("Usuario deletado com sucesso.", (done) => {
      let id_200 = 100001718509097;
      request.delete('/usuarios/usuario/' + id_200)
        .expect(204, done);
    });
  });

  describe("status 404", () => {
    it('Erro ao deletar um usuário.', (done) => {
      let id_404 = '000';
      request.del('/usuario/facebook/' + id_404)
        .expect(404, done);
    });
  });
});
