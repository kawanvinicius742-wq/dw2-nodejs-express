// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";

// importando o model
import Pedido from "../models/Pedidos.js";

// router() : método do Express para criar rotas
const rota = express.Router()

// ROTA PEDIDOS
rota.get("/pedidos",function(req,res){
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
})

// Exportando o módulo
export default rota;