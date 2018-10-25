const mysql = require('mysql');//sql

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
});
console.log("established mysql connection");
module.exports = mc;