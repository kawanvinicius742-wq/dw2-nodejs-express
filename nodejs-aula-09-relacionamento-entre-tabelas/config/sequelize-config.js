// Arquivo com os dados de conexão com o banco
// Importando o sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
  //Dados de conexão
  dialect: "mysql",
  host: "localhost",
  username: "root",
  // password: '0612@2025$',
  password: "",
  // ESTA LINHA abaixo PRECISA ESTAR COMENTADA NA PRIMEIRA EXECUÇÃO DO PROJETO
  database: "loja_relacional",
  timezone: "-03:00",
});

// Exportando o módulo
export default connection;
