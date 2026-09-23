// MODEL CLIENTE
// UM MODEL É UMA REPRESENTAÇÃO DE UMA ENTIDADE DO SISTEMA (TABELA)

//IMPORTANDO O ARQUIVO DE CONEXÃO
import connection from "../config/sequelize-config.js";
//importando a biblioteca sequelize
import Sequelize from "sequelize";

//O MÉTODO DEFINE() define a estrutura de uma tabela no banco
const Produto = connection.define("produtos", {
  //ATRIBUTOS DA TABELA CLIENTES
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
// O MÉTODO .SYNC() SINCRONIZA A ESTRUTURA DO MODEL COM A TABELA NO BANCO DE DADOS
// force : false -> sincroniza a tabelas somente na primeira vez(somente se não existir)
Produto.sync({force: false})

// Exportando o módulo
export default Produto;