// MODEL CLIENTE
// UM MODEL É UMA REPRESENTAÇÃO DE UMA ENTIDADE DO SISTEMA (TABELA)

//IMPORTANDO O ARQUIVO DE CONEXÃO
import connection from "../config/sequelize-config.js";
//importando a biblioteca sequelize
import Sequelize from "sequelize";

//O MÉTODO DEFINE() define a estrutura de uma tabela no banco
const Pedido = connection.define("pedidos", {
  //ATRIBUTOS DA TABELA CLIENTES
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  //CHAVE ESTRANGEIRA
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
// O MÉTODO .SYNC() SINCRONIZA A ESTRUTURA DO MODEL COM A TABELA NO BANCO DE DADOS
// force : false -> sincroniza a tabelas somente na primeira vez (somente se não existir)

/*
Essa linha será movida para o arquivo "index.js"
 Pedido.sync({ force: false });
*/
// Exportando o módulo
export default Pedido;
