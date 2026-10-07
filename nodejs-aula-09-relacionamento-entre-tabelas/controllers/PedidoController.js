// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";

// importando o model
import Pedido from "../models/Pedidos.js";
import Cliente from "../models/Clientes.js";

// router() : método do Express para criar rotas
const rota = express.Router();

// ROTA PEDIDOS
// rota.get("/pedidos", function (req, res) {
// const pedidos = [
//     {numero: "983721931", valor: 1200},
//     {numero: "983721932", valor: 900},
//     {numero: "983721933", valor: 3200},
//     {numero: "983721934", valor: 150}
// ]

// SELECIONANDO TODOS OS PEDIDOS DO BANCO DE DADOS (PROMISSE)
// LISTA TODOS OS PEDIDOS

//   (Pedido.findAll({
//     // TRAZENDO OS DADOS DOS CLIENTES JUNTOS COM OS PEDIDOS (INNER JOIN)
//     include: [
//       {
//         model: Cliente, // INCLUI A TABVELA CLIENTE NO SELECT
//         required: true, // OPCIONAL: GARANTE QUE SOMENTE PEDIDOS COM CLINTES ASSOCIADOS SEJAM RETORNADOS
//       },
//     ],
//   }),
//     // SELECIONANDO TODOS OS CLIENTES
//     Cliente.findAll()

//       .then((pedidos) => {
//         res.render("pedidos", {
//           // ENVIANDO A LISTA DE PEDIDOS PARA A PÁGINA HTML
//           pedidos: pedidos,
//         });
//       })
//       .catch((error) => {
//         console.log(`Ocorreu um erro ao listar os pedidos. Erro: ${error}`);
//       }));
//   // res.render("pedidos", {
//   //     pedidos: pedidos
//   // })
// });

// ROTA PEDIDOS
rota.get("/pedidos", function (req, res) {
  Promise.all([
    // Listando todos os Pedidos
    Pedido.findAll({
      // Trazendo os dados dos Clientes juntos com os pedidos (innerJoin)
      include: [
        {
          model: Cliente, // Inclui a tabela de Clientes no SELECT
          required: true, // Opcional: Garante que somente pedidos com Clientes associados sejam retornados
        },
      ],
    }),
    // Selecionando todos os clientes
    Cliente.findAll(),
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        // Enviando a lista de pedidos para a página
        pedidos: pedidos,
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Erro ao listar os pedidos. Erro: ${error}`);
    });
});

// Rota de cadastro de PEDIDOS
rota.post("/pedidos/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;
  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Pedido.create({
    // NOME DA COLUNA / VARIAVEL
    numero: numero,
    valor: valor,
    cliente_id: clienteId,
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
