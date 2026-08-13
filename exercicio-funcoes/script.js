// Função SIMPLES

function showMessage() {
  document.writeln(`<h3> 1 - Função Simples </h3>`);
  const message =
    "<p> Nome: Kawan <br> Idade: 24 <br> Cidade: Registro <br>  </p> <hr>";
  document.write(message);
}

// Invocando a função
showMessage();

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

const n1 = 12;
const n2 = 3;

function divisao(n1, n2) {
  let resultado = n1 / n2;
  document.writeln(`<h3> 2 - Função com mais de um parâmetro </h3>`);
  document.write(
    `O resultado da divisão ${n1} / ${n2} é igual a ${resultado}. <hr>`,
  );
}

//ARGUMENTO
divisao(n1, n2);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

document.writeln(`<h3> 3 - Função Com Retorno </h3>`);

// FUNÇÕES COM RETORNO
const nu1 = 7;
const nu2 = 7;
const nu3 = 7;

// ESSA FUNÇÃO GERA UM RESULTADO E EXPORTA
function multiplicar(nu1, nu2, nu3) {
  return nu1 * nu2 * nu3; // * operador de multiplicação
}
// EXIBINDO O RESULTADO
document.write(
  `<p> A multiplicação de ${nu1} * ${nu2} * ${nu3} é igual a <strong>  ${multiplicar(nu1, nu2, nu3)}</strong>.</p> <hr>`,
);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

document.writeln(`<h3> 4 - Função Com Mais De Um Retorno </h3>`);

// FUNÇÕES COM MAIS DE UM RETORNO / RETORNOS DIFERENTES
const number = 24;

function iDade(number) {
  if (number >= 18) {
    return "MAIOR de Idade";
  } else {
    return "MENOR de Idade";
  }
}

document.write(
  `<p> Você tem ${number} anos e é <strong>${iDade(number)}</strong>!</p> <hr>`,
);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

// FUNÇÃO ANÔNIMA
document.writeln(`<h3> 5 - Função Anônima </h3>`);

const md = 4;

const media = function (md) {
  if (md >= 5) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
};

document.writeln(
  `<p> Sua média é <strong>${md}</strong>. Você foi <strong>${media(md)}</strong> </p> <hr>`,
);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

//FUNÇÃO SETA - ARROW FUNCTION COM PARÂMETRO ÚNICO

document.writeln(`<h3> 6 - Função Arrow Function COM PARÂMETRO ÚNICO </h3>`);

const triplo = (y) => {
  return y * 3;
};

const y = 7;

document.writeln(`<p>O triplo do número ${y} é ${triplo(y)}</p> <hr>`);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

//FUNÇÃO SETA - COM MAIS DE UM PARÂMETRO - ARROW FUNCTION
document.writeln(`<h3> 7 - Função Arrow Function COM MAIS DE UM PARÂMETRO </h3>`);

const soma = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};


const num1 = 2;
const num2 = 2;
const num3 = 2;
const num4 = 2;


document.writeln(
  `<p> O resultado da soma foi: ${soma(num1, num2, num3, num4)}</p> <hr>`,
);

/*----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------*/

// FUNÇÃO IMEDIATA (IIFE - Immediately Invoked Function Expression)

document.writeln(`<h3> 8 - Função IMEDIATA IIFE </h3>`);

const imediata = (function (nomeU) {
    document.writeln(`<p>Seja Bem-Vindo ${nomeU}!</p> <hr>`)
})("KAWAN"); //Passando os parâmetros