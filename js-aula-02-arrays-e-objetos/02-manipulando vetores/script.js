// MÉTODOS DE MANIPULAÇÃO DE VETORES

let frutas = [" Laranja", " Maçã", " Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = " Morango";

document.write(`<p> Agora a lista é: ${frutas} </p>`);

//MÉTODO PUSH: Insere um novo elemento no FINAL do vetor
frutas.push(" Abacaxi");

document.writeln(`<p> Agora a lista é: ${frutas}</p>`);

//MÉTODO UNSHIFT: Insere um novo elemento no INÍCIO do vetor

// frutas[0] = 'pera';

frutas.unshift(" Pêra");
document.writeln(`<p> Agora a lista é: ${frutas}</p>`);

//MÉTODO LENGTH: Retorna o número de elementos no vetor

document.writeln(`<p> Na nossa lista temos ${frutas.length} frutas.</p>`);

//MÉTODO SORT: Ordena os itens do vetor
document.writeln(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.writeln(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

// MÉTODO SORT: Ordenando em crescente o decrescente
let numeros = [6, 8, 2, 9, 3, 800, 200];

document.writeln(`<p> Os números ordenados são: ${numeros}</p>`);

document.writeln(`<p> Os números ordenados são: ${numeros.sort()}</p>`);

//ORDENANDO CORRETAMENTE OS NÚMEROS
// OREDEM CRESCENTE

document.writeln(`<p> Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`);

//ORDEM DECRESCENTE
document.writeln(`<p> Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`);