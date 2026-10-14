import express from "express";
const router = express.Router();
// IMPORTANDO O MODEL
import Usuario from "../models/Usuario.js";
// IMPORTANDO A BIBLIOTECA BCRYPT (hash de senha)
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
  // COLETANDO OS DADOS DO FORMULÁRIO
  const email = req.body.email;
  const password = req.body.password;
  // BUSCANDO O USUÁRIO DO BANCO
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    // SE O USUÁRIO EXISTIR
    if (usuario != undefined) {
      // VALIDANDO SENHA (HASH)
      const senhaCorreta = bcrypt.compareSync(password, usuario.password);
      // SE A SENHA FOR VÁLIDA
      if (senhaCorreta) {
        res.redirect("/");
        //SE A SENHA FOR INVÁLIDA
      } else {
        res.send(`Senha imválida! <br>
                    Verifique os dados e tente novamente! <br>
                    <a href="/login"> Voltar </a>`);
      }
    } else {
      res.send(`Usuário não existe! <br>
                Verifique os dados e tente novamente! <br>
                <a href="/login"> Voltar </a>`);
    }
  });
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/cadastro/novo", (req, res) => {
  //COLETANDO OS DADOS DO FORMULÁRIO
  const email = req.body.email;
  const password = req.body.password;

  // VERIFICANDO SE O USUÁRIO JÁ EXISTE
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //USUARIO NÃO ENCONTRADO
    if (usuario == undefined) {
      // CADASTRA O USUÁRIO

      // GERANDO O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // ENVIANDO PARA O BANCO DE DADOS
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log("Erro ao criar a conta. Erro: " + error);
        });
      // USUÁRIO JÁ CADASTRADO
    } else {
      res.send(`Usuário já cadastrado! <br>
            Verifique os dados e tente novamente. <br> 
            <a href="/login"> Voltar </a>`);
    }
  });
});

export default router;
