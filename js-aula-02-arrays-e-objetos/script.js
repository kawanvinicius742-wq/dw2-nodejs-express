/* 
array chamado estoqueProdutos que contenha pelo menos três objetos. Cada objeto 
deve representar um produto com as seguintes propriedades: nome (string), marca (string), 
preco (number) e descricao (string).
*/

let estoqueProdutos = [
  {
    nome: "Notebook",
    marca: "Acer",
    preco: 3200,
    descricao: "Aspire 5. Notebook para seus estudos. ",
  },
  {
    nome: "Ar-condicionado",
    marca: "Daikin",
    preco: 3100,
    descricao: "Ar-condicionado para seu maior conforto | 12.000 BTUs | 220V",
  },
  {
    nome: "Chuveiro Elétrico",
    marca: "Zagonel",
    preco: 350,
    descricao: "Potência 7.500w | 220V",
  },
];

/* Utilize um loop forEach para percorrer o estoqueProdutos e exibir no navegador, para cada 
produto, as informações no formato: Produto: [Nome do Produto] Marca: [Marca do Produto] 
Preço: R$ [Preço do Produto] Descrição: [Descrição do Produto] Utilize document.write e <br> 
para quebrar as linhas. */

document.write("<h2>Produtos: </h2>");

estoqueProdutos.forEach(function (produto) {
  document.write("Produto: " + produto.nome + "<br>");
  document.write("Marca: " + produto.marca + "<br>");
  document.write("Preço: R$ " + produto.preco + "<br>");
  document.write("Descrição: " + produto.descricao + "<br><br>");
});

/* Adicione um novo produto ao final do estoqueProdutos utilizando o método push(). Exiba o 
array atualizado no navegador. */

estoqueProdutos.push({
  nome: "TV",
  marca: "AOC",
  preco: 1600,
  descricao: "Sistema ROKU para Streaming | 43 polegadas.",
});

document.write("<h2>Com push()</h2>");

estoqueProdutos.forEach(function (produto) {
  document.write("Produto: " + produto.nome + "<br>");
  document.write("Marca: " + produto.marca + "<br>");
  document.write("Preço: R$ " + produto.preco + "<br>");
  document.write("Descrição: " + produto.descricao + "<br><br>");
});

/*
Adicione um novo produto ao início do estoqueProdutos utilizando o método unshift(). Exiba o 
array atualizado no navegador.
*/
estoqueProdutos.unshift({
  nome: "Celular",
  marca: "Iphone",
  preco: 7000,
  descricao: "Camera Full HD",
});

document.write("<h2>Com unshift()</h2>");

estoqueProdutos.forEach(function (produto) {
  document.write("Produto: " + produto.nome + "<br>");
  document.write("Marca: " + produto.marca + "<br>");
  document.write("Preço: R$ " + produto.preco + "<br>");
  document.write("Descrição: " + produto.descricao + "<br><br>");
});

/*
Ordene o estoqueProdutos em ordem crescente de preço e exiba o array ordenado no 
navegador. Utilize document.write para exibir os produtos, formatando o preço para duas 
casas decimais e com o símbolo R$. Utilize o método sort() com uma função de comparação.
*/

estoqueProdutos.sort(function (a, b) {
  return a.preco - b.preco;
});

document.write("<h2>Produtos ordenados por preço</h2>");

estoqueProdutos.forEach(function (produto) {
  document.write("Produto: " + produto.nome + "<br>");
  document.write("Marca: " + produto.marca + "<br>");
  document.write("Preço: R$ " + produto.preco.toFixed(2) + "<br>");
  document.write("Descrição: " + produto.descricao + "<br><br>");
});
