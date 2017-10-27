"use strict";

class UsuarioDao {

    constructor(connection) {
      this._connection = connection;
    }

    salva (usuario,callback) {
      this._connection.query('INSERT INTO usuario SET ?', usuario, callback);
    }

    lista (callback) {
      this._connection.query('select * from usuario', callback);
    }

    deleta (facebookId, callback) {
      this._connection.query("DELETE FROM usuario where facebookId = ?", [facebookId], callback);
    }

    buscaPorId (facebookId,callback) {
      this._connection.query("select * from usuario where facebookId = ?", [facebookId], callback);
    }
}

module.exports = () => {
    return UsuarioDao;
};
