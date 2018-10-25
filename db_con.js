const mysql = require('mysql');//sql

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud4'
});

module.exports = mc;