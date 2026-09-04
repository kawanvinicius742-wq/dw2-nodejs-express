// index.js : arquivo principal do back-end.

// Importando Express.js para o projeto
const express = require("express"); // Forma clássica (CommonJS Modules)

const app = express(); // Criando uma instância do express

//Configurando o EJS
app.set("view engine", "ejs"); //EJS renderiza as páginas do site

// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() ->  cria uma rota na aplicação
app.get("/", (req, res) => {
  // res.send("<h1 style='text-align: center;'> Bem-vindo! </h1>")
  res.render("index");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  // res.send("<h1>Página de produtos</h1>")
  //Lista de produtos (dados mockados)
  //Futuramente os dados virão do banco de dados
  //Array de objetos
  const produtos = [
    { nome: "Computador", marca: "Lenovo", preco: 3500 },
    { nome: "Celular", marca: "Samsung", preco: 4000 },
    { nome: "Notebook", marca: "Dell", preco: 5100 },
    { nome: "Tablet", marca: "Asus", preco: 2400 },
  ];

  // Enviando a lista de produtos para página
  res.render("produtos", {
    // Enviando a lista de produtos para página
    produtos: produtos,
  });
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});

app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Kawan", cpf: "xxx.xxx.xxx-xx"},
    { nome: "Vinicius", cpf: "xxx.xxx.xxx-xx"},
    { nome: "Azevedo", cpf: "xxx.xxx.xxx-xx"},
    { nome: "Peniche", cpf: "xxx.xxx.xxx-xx"},

  ]
  res.render("clientes",{
    clientes: clientes,
  })
});

app.get("/perfil", (req, res) => {
  res.render("perfil");
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
