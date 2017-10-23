var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'facebook_luizalabs'
		});
}

module.exports = function() {
	return createDBConnection;
}
