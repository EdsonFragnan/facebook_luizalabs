function UsuarioDao(connection) {
    this._connection = connection;
}

UsuarioDao.prototype.salva = function(usuario,callback) {
    this._connection.query('INSERT INTO usuario SET ?', usuario, callback);
}

UsuarioDao.prototype.lista = function(callback) {
    this._connection.query('select * from usuario',callback);
}

UsuarioDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from usuario where id = ?",[id],callback);
}

module.exports = function(){
    return UsuarioDao;
};
