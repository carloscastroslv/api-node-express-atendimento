const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'sistematarefas',
    password: 'reactnode',
    database: 'tarefas',
})

module.exports = conexao;