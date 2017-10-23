function UsuarioDao(connection) {
    this._connection = connection;
}

PagamentoDao.prototype.salva = function(usuario,callback) {
    this._connection.query('INSERT INTO usuario SET ?', usuario, callback);
}

PagamentoDao.prototype.lista = function(callback) {
    this._connection.query('select * from usuario',callback);
}

PagamentoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from usuario where id = ?",[id],callback);
}

module.exports = function(){
    return UsuarioDao;
};
