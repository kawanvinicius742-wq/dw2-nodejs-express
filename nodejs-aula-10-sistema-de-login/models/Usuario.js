// MODEL USUÁRIO
// UM MODEL É UMA REPRESENTAÇÃO DE UMA ENTIDADE DO SISTEMA (TABELA)

//IMPORTANDO O ARQUIVO DE CONEXÃO
import connection from "../config/sequelize-config.js";
//importando a biblioteca sequelize
import Sequelize from "sequelize";

const Usuario = connection.define('usuarios', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Usuario.sync({force: false});

export default Usuario;