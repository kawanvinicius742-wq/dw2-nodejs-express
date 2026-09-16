// IMPORTANDO O FRAMEWORK EXPRESS
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router()

//ROTA DE PERFIL
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Exportando o módulo
export default rota;
