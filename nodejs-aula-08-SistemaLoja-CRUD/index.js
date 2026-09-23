// // Importando o Express
// const express = require("express")
// // Iniciando o Express
// const app = express()

import express from "express"; // Forma de importação do EJ6

//IMPORTANDO O ARQUIVO DE CONEXÃO SEQUELIZE
import connection from "./config/sequelize-config.js";

const app = express(); // Criando uma instância do express

// Importando o Controller de CLIENTE
import ClienteController from "./controllers/ClienteController.js";
// Importando o Controller de PEDIDO
import PedidoController from "./controllers/PedidoController.js";
// Importando o Controller de PRODUTO
import ProdutoController from "./controllers/ProdutoController.js";

import Cliente from "./models/Clientes.js";
import Pedido from "./models/Pedidos.js";
import Produto from "./models/Produtos.js";



// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Configurando as rotas
// Inicializando as rotas de cliente
app.use("/", ClienteController);

// Configurando as rotas
// Inicializando as rotas de pedido
app.use("/", PedidoController);

// Configurando as rotas
// Inicializando as rotas de produto
app.use("/", ProdutoController);

// REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    // Sucesso na promessa
    console.log("Conexão com o banco de dados bem sucedida!");
    // Falha na promessa
  })
  .catch((error) => {
    console.log(`Conexão com o banco de dados falhou. Erro: ${error}!`);
  });

// CRIANDO BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja";
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`)
  .then(() => {
    console.log(`O banco de dados ${DB_NAME} está criado!`);
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
  });

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
