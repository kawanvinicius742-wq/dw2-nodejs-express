// // Importando o Express
// const express = require("express")
// // Iniciando o Express 
// const app = express() 

import express from "express"; // Forma de importação do EJ6

const app = express(); // Criando uma instância do express

// Importando o Controller de PRODUTO
import ClienteController from "./controllers/ClienteController.js";
// Importando o Controller de CLIENTE
import PedidoController from "./controllers/PedidoController.js";
// Importando o Controller de SERVICO
import ProdutoController from "./controllers/ProdutoController.js";

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Configurando as rotas
// Inicializando as rotas de produto
app.use("/", ClienteController);

// Configurando as rotas
// Inicializando as rotas de cliente
app.use("/", PedidoController);

// Configurando as rotas
// Inicializando as rotas de servico
app.use("/", ProdutoController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})







// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})