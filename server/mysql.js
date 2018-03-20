const mysql = require('mysql')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3360',
    user: 'root',
    password: '123456',
    database: 'project'
})

module.exports = conn