// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";

// importando o model
import Pedido from "../models/Pedidos.js";

// router() : método do Express para criar rotas
const rota = express.Router();

// ROTA PEDIDOS
rota.get("/pedidos", function (req, res) {
  // const pedidos = [
  //     {numero: "983721931", valor: 1200},
  //     {numero: "983721932", valor: 900},
  //     {numero: "983721933", valor: 3200},
  //     {numero: "983721934", valor: 150}
  // ]

  // SELECIONANDO TODOS OS PEDIDOS DO BANCO DE DADOS (PROMISSE)
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        // ENVIANDO A LISTA DE PEDIDOS PARA A PÁGINA HTML
        pedidos: pedidos,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os pedidos. Erro: ${error}`);
    });

  // res.render("pedidos", {
  //     pedidos: pedidos
  // })
});

// Rota de cadastro de PEDIDOS
rota.post("/pedidos/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const numero = req.body.numero;
  const valor = req.body.valor;
  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Pedido.create({
    // NOME DA COLUNA / VARIAVEL
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o pedido. Erro: ${error}`);
    });
});


// ROTA PARA EXCLUIR UM PEDIDO
// :id -> CRIA UM PARÂMETRO PRA ROTA
rota.get("/pedidos/excluir/:id", (req, res) => {
  //CRIANDO UMA VARIÁVEL PARA ARMAZENAR O PARÂMETRO QUE CHEGA PELA URL
  const id = req.params.id;

  //CHAMANDO O MODEL E PEDINDO PARA EXCLUIR O CLIENTE
  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`);
    });
});

// ROTA DE EDIÇÃO DE PEDIDO
rota.get("/pedidos/editar/:id", (req, res) => {
  //COLETANDO O PARÂMENTRO DE URL
  const id = req.params.id;
  //BUSCANDO O CLIENTE NO BANCO PELA ID
  Pedido.findByPk(id)
    .then((pedido) => {
      res.render("PedidoEditar", {
        //ENVIANDO UM OBJETO COM OS DADOS DO CLIENTE PARA A PÁGINA
        pedido: pedido,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o pedido. Erro ${error}`);
    });
});

// ROTA QUE ALTERA UM PEDIDO NO BANCO DE DADOS
rota.post("/pedidos/alterar", (req, res) => {
  //COLETANDO OS DADOS DO FORMULÁRIO
  const id = req.body.id;
  const numero = req.body.numero;
  const valor = req.body.valor;

  //CHAMANDO O MODEL E PEDINDO PARA ALTERAR NO BANCO DE DADOS
  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o pedido. Erro: ${error}`);
    });
});

// Exportando o módulo
export default rota;
