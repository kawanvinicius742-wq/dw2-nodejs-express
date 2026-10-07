// NESTE ARQUIVO SERÁ DEFINIDO E OS RELACIONAMENTOS ENTRE TABELAS

//MODEL CLIENTE
import Cliente from "../models/Clientes.js";

//MODEL PEDIDO
import Pedido from "../models/Pedidos.js";

// DEFININDO AOS RELACIONAMENTOS ENTRE OS MODELS
const defineAssociations = () => {
    // UM CLIENTE POSSUI MUITOS PEDIDOS
    Cliente.hasMany(Pedido, {foreignKey: "cliente_id"});
    //UM PEDIDO PERTENCE A UM CLIENTE
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
};

// EXPORTANDO O MÓDULO
export default defineAssociations;