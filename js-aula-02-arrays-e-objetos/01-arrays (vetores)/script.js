// Vetores no JAVASCRIPT

let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

let aluno = "Kawan";

document.writeln(
  `O tipo de variável que recebe um vetor no Javascript é <strong> ${typeof produtos}</strong>`,
);

document.writeln(
  `<br><br> O tipo de variável aluno é <strong>${typeof aluno}</strong>`,
);

document.writeln("<br><br> Exibindo os itens do vetor pelo índice: <br>");

// document.writeln(`<p>${produtos}</p>`);

document.writeln(`<p>${produtos[0]}</p>`);
document.writeln(`<p>${produtos[1]}</p>`);
document.writeln(`<p>${produtos[2]}</p>`);
document.writeln(`<p>${produtos[3]}</p>`);

document.write(
  "<br><br> Exibindo os itens do vetor através do <strong> forEach: </strong>",
);

produtos.forEach((produto) => {
  // Para cada "Produto" da lista de "Produtos", faça tal. . .
  document.writeln(`<p>${produto}</p>`);
});

document.writeln("<br> Exibindo os itens do vetor e os índices com o forEach:");
produtos.forEach((produto, indice) => {
  document.writeln(`<p> ${indice + 1} - ${produto} </p>`);
});
