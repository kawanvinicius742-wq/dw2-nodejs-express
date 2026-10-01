// Arquivo com os dados de conexão com o banco
// Importando o sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
<<<<<<< HEAD
    //Dados de conexão
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    // password: '',
    database: 'loja',
    timezone: '-03:00'
=======
  //Dados de conexão
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "0612@2025$",
  database: "loja",
  timezone: "-03:00",
>>>>>>> 6b9ad7ac9ac51fcec227b9dba57f8e6f8a92b56f
});

// Exportando o módulo
export default connection;
