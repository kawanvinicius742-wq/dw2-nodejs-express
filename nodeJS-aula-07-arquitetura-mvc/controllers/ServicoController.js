// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router()
// ROTA DE SERVIÇOS
rota.get("/servicos", (req, res) => {
  res.render("servicos");
});

// Exportando o módulo
export default rota;