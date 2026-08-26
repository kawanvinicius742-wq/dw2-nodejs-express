document.write("<h3>Manipulando datas: </h3>");

// PARA COMEÇARMOS MANIPULAR DATAS NO JAVASCRIPT, PRECISAMOS PRIMEIRO CRIAR UMA INSTÂNCIA DA CLASSE DATE, QUE É NATIVA DO JAVA

const dataAtual = new Date();

document.write(dataAtual);

//PEGANDO O DIA ATUAL
const dia = dataAtual.getDate();

document.write(`<p>Hoje é dia ${dia}.</p>`);

//PEGANDO O  MES ATUAL
const mes = dataAtual.getMonth() + 1;

document.write(`<p>Estamos no mês ${mes}.</p>`);

//PEGANDO O ANO ATUAL
const ano = dataAtual.getFullYear();

document.write(`<p>Estamos no ano ${ano}.</p>`);

//EXIBINDO DATA COMPLETA
document.write(`Data de hoje: ${dia}/${mes}/${ano}.`);

// ADICIONANDO DIAS, MESES E ANOS A DATA ATUAL
// ADICIONANDO 4 DIAS A DATA ATUAL
dataAtual.setDate(dataAtual.getDate() + 4);

//EXIBINDO A NOVA DATA:
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}.</p>`);

//ADICIONADO 3 MESES À DATA ATUAL:
dataAtual.setMonth(dataAtual.getMonth() + 3);
//EXIBINDO A NOVA DATA:
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.</p>`);

//ADICIONADO 2 ANOS À DATA ATUAL:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
//EXIBINDO A NOVA DATA:
document.write(`<p>Daqui a 2 anos será ano ${dataAtual.getFullYear()}.</p>`);
/*###################################################################################################################################################*/

//FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando números e moedas: </h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
//MOSTRANDO CASAS DECIMAIS
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
//OCULTANDO CASAS DECIMAIS
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
//TROCANDO O IDENTIFICADOR DE CASA DECIMAIS
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

//FORMATANDO PARA REAL
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
    </p>`);
/*##################################################################################################################################################*/
//FORMATAÇÃO DE STRINGS
document.write("<h3>Formatação de Strings: </h3>");
const nome = "Kawan";

//ALTERNANDO STRINGS PARA LETRAS MAIÚSCULAS
document.write(`<p>${nome.toUpperCase()}</p>`);
//ALTERNANDO STRINGS PARA LETRAS MINÚSCULAS
document.write(`<p>${nome.toLowerCase()}</p>`);

//COLOCANDO AS INICIAS EM LETRAS MAIÚSCULAS
const cidade = "sete barras";
const cidadeFormatada = cidade
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

//EXIBINDO
document.write(`<p>${cidadeFormatada}</p>`);

//CONTANDO O NÚMERO DE CARACTERES
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`)