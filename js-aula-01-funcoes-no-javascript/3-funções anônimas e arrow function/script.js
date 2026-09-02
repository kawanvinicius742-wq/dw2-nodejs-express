// FUNÇÃO ANÔNIMA

const mult = function (x) {
  return x * 2;
};

const x = 15;

document.writeln(`<p> O resultado da multiplicação é ${mult(x)} </p>`);

//FUNÇÃO SETA - ARROW FUNCTION
const triplo = (y) => {
  return y * 3;
};

/* OU QUANDO A UM ÚNICO PARÂMETRO:

 const triplo = y => {
   return y * 3;

}; 
*/

const y = 100;

document.writeln(`<p>O triplo de ${y} é ${triplo(y)}</p>`);

//FUNÇÃO SETA - COM MAIS DE UM PARÂMETRO - ARROW FUNCTION
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

//EVAL NO JAVASCRIPT É UMA FUNÇÃO NATIVA QUE REALIZA CÁLCULOS MATEMÁTICOS A PARTIR DE DOIS NUMEROS E UM OPERADOR.

const num1 = 8;
const operador = "*";
const num2 = 2;

document.writeln(
  `<p> O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`,
);

// FUNÇÃO IMEDIATA (IIFE - Immediately Invoked Function Expression)
const imediata = (function () {
    document.writeln("<p>Estou sendo executada imediatamente!</p>")
})(); //Passando os parâmetros

//FUNÇÃO IMEDIATA - COM PARÂMETROS
const loadUser = (function(user){
    document.writeln(`<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`)
    //MOSTRANDO AS INFORMAÇÕES APÓS 3 SEGUNDOS
    setTimeout(() =>{
        document.writeln(
            `
           Nome: Kawan Vinicius <br>
           Idade: 24 anos <br>
           Cidade: Registro <br>
           Hobby: Séries
            `
        );
    }, 3000);
})("Kawan"); //Passando o parâmetro
