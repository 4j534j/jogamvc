const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'rasmus',
    password: 'password',
    database: 'joga_mysql'
});

module.exports = db;