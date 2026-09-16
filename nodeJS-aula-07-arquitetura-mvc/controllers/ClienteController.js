// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router()

// ROTA DE CLIENTES
rota.get("/clientes", (req, res) => {
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

// Exportando o módulo
export default rota;