// index.js : arquivo principal do back-end.

// Importando Express.js para o projeto
// const express = require("express"); // Forma clássica (CommonJS Modules)
import express from "express"; // Forma de importação do EJ6

const app = express(); // Criando uma instância do express

// Importando o Controller de PRODUTO
import ProdutoController from "./controllers/ProdutoController.js";
// Importando o Controller de CLIENTE
import ClienteController from "./controllers/ClienteController.js";
// Importando o Controller de SERVICO
import ServicoController from "./controllers/ServicoController.js";
// Importando o Controller de USUARIO
import UsuarioController from "./controllers/UsuarioController.js";

// CONFIGURAÇÕES DO EXPRESS
//Configurando o EJS
app.set("view engine", "ejs"); //EJS renderiza as páginas do site
// Configurando a pasta public para arquivos estáticos
app.use(express.static("public"));

// Configurando as rotas
// Inicializando as rotas de produto
app.use("/", ProdutoController);

// Configurando as rotas
// Inicializando as rotas de cliente
app.use("/", ClienteController);

// Configurando as rotas
// Inicializando as rotas de servico
app.use("/", ServicoController);

// Configurando as rotas
// Inicializando as rotas de usuario
app.use("/", UsuarioController);

// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() ->  cria uma rota na aplicação
app.get("/", (req, res) => {
  // res.send("<h1 style='text-align: center;'> Bem-vindo! </h1>")
  res.render("index");
});

//Método do Express para iniciar um servidor back-end
//app.listen()
//Iniciando servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao inciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
  }
});
