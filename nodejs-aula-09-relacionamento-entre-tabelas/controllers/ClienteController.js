import express from "express";
// Importando o model
import Cliente from "../models/Clientes.js";

const rota = express.Router();

// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        // Enviando a lista de clientes para a página HTML
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`);
    });
});

/* --- */
// Rota de cadastro de clientes
rota.post("/clientes/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Cliente.create({
    // NOME DA COLUNA / VARIAVEL
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});
/* --- */

// ROTA PARA EXCLUIR UM CLIENTE
// :id -> CRIA UM PARÂMETRO PRA ROTA
rota.get("/clientes/excluir/:id", (req, res) => {
  //CRIANDO UMA VARIÁVEL PARA ARMAZENAR O PARÂMETRO QUE CHEGA PELA URL
  const id = req.params.id;

  //CHAMANDO O MODEL E PEDINDO PARA EXCLUIR O CLIENTE
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`);
    });
});

// ROTA DE EDIÇÃO DE CLIENTE
rota.get("/clientes/editar/:id", (req, res) => {
  //COLETANDO O PARÂMENTRO DE URL
  const id = req.params.id;
  //BUSCANDO O CLIENTE NO BANCO PELA ID
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEditar", {
        //ENVIANDO UM OBJETO COM OS DADOS DO CLIENTE PARA A PÁGINA
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`);
    });
});

// ROTA QUE ALTERA UM CLIENTE NO BANCO DE DADOS
rota.post("/clientes/alterar", (req, res) => {
  //COLETANDO OS DADOS DO FORMULÁRIO
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  //CHAMANDO O MODEL E PEDINDO PARA ALTERAR NO BANCO DE DADOS
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o cliente. Erro: ${error}`);
    });
});

export default rota;
