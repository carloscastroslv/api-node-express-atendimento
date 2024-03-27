
class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS atendimentos (
            id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            data date DEFAULT NULL,
            servico varchar(100) DEFAULT NULL,
            cliente varchar(100) DEFAULT NULL,
            status enum('ativo','realizado','cancelado') DEFAULT 'ativo'
          );
          `;
          this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Eita, deu erro na hora de criar a tabela");
                console.log(error.message)
                return;
            }
            console.log("Tabela criada com sucesso")
          })

        
    }
}

module.exports = new Tabelas();