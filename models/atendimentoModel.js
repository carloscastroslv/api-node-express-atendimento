const conexao = require('../infraestrutura/conexao')
class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve, reject)=> {
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Deu erro no listar...")
                    reject(error);
                }
                console.log("Show")
                resolve(resposta)
            })
        })
    }

    criar(novoAtendimento) {
        const sql = "INSERT INTO atendimentos SET ?";
        return new Promise((resolve, reject)=> {
            conexao.query(sql, novoAtendimento, (error, resposta) => {
                if(error) {
                    console.log("Deu erro no listar...");
                    reject(error);
                }
    
                console.log("Show..")
                resolve(resposta);
            })
        })

    }

    atualizar(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimentos SET ? WHERE id = ?";
        return new Promise((resolve, reject)=> {
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if(error) {
                    console.log("Deu erro no listar...");
                    reject(error);
                }
    
                console.log("Show..")
                resolve(resposta);
            })
        })

    }

    delete(id) {
        const sql = "DELETE FROM atendimentos WHERE id = ?";
        return new Promise((resolve, reject)=> {
            conexao.query(sql, id, (error, resposta) => {
                if(error) {
                    console.log("Deu erro no listar...");
                    reject(error);
                }
    
                console.log("Show..")
                resolve(resposta);
            })
        })

    }
}

module.exports = new AtendimentoModel();