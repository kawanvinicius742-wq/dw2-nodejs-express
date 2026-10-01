// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";

// importando o model
import Produto from "../models/Produtos.js";

// router() : método do Express para criar rotas
const rota = express.Router();

// ROTA PRODUTOS
rota.get("/produtos", function (req, res) {
  // const produtos = [
  //     {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
  //     {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
  //     {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
  //     {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
  // ]

  // SELECIONANDO TODOS OS PRODUTOS DO BANCO DE DADOS (PROMISSE)
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        // ENVIANDO A LISTA DE PRODUTOS PARA A PÁGINA HTML
        produtos: produtos,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`);
    });

  // res.render("produtos", {
  //     produtos: produtos
  // })
});

/* --- */
// Rota de cadastro de produtos
rota.post("/produtos/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Produto.create({
    // NOME DA COLUNA / VARIAVEL
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o produto. Erro: ${error}`);
    });
});
/* --- */

// ROTA PARA EXCLUIR UM PRODUTO
// :id -> CRIA UM PARÂMETRO PRA ROTA
rota.get("/produtos/excluir/:id", (req, res) => {
  //CRIANDO UMA VARIÁVEL PARA ARMAZENAR O PARÂMETRO QUE CHEGA PELA URL
  const id = req.params.id;

  //CHAMANDO O MODEL E PEDINDO PARA EXCLUIR O CLIENTE
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o produto. Erro: ${error}.`);
    });
});

// ROTA DE EDIÇÃO DE PRODUTO
rota.get("/produtos/editar/:id", (req, res) => {
  //COLETANDO O PARÂMENTRO DE URL
  const id = req.params.id;
  //BUSCANDO O PRODUTO NO BANCO PELA ID
  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtoEditar", {
        //ENVIANDO UM OBJETO COM OS DADOS DO PRODUTO PARA A PÁGINA
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o produto. Erro ${error}`);
    });
});

// ROTA QUE ALTERA UM PRODUTO NO BANCO DE DADOS
rota.post("/produtos/alterar", (req, res) => {
  //COLETANDO OS DADOS DO FORMULÁRIO
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  //CHAMANDO O MODEL E PEDINDO PARA ALTERAR NO BANCO DE DADOS
  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o produto. Erro: ${error}`);
    });
});

// Exportando o módulo
export default rota;
