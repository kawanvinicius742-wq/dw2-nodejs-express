// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";

// importando o model
import Produto from "../models/Produtos.js";

// router() : método do Express para criar rotas
const rota = express.Router()

// ROTA PRODUTOS
rota.get("/produtos",function(req,res){
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

})

// Exportando o módulo
export default rota;