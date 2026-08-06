// FUNÇÕES COM RETORNO
const n1 = 50;
const n2 = 3;

// ESSA FUNÇÃO GERA UM RESULTADO E EXPORTA
function multiplicar(n1, n2) {
  return n1 * n2; // * operador de multiplicação
}
// EXIBINDO O RESULTADO
document.write(
  `<p> A multiplicação de ${n1} por ${n2} é igual a <strong>  ${multiplicar(n1, n2)}</strong>.</p>`,
);

// FUNÇÕES COM MAIS DE UM RETORNO / RETORNOS DIFERENTES
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`<p> O número ${number} é <strong>${parImpar(number)}</strong>!</p>`)