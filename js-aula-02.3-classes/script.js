// CLASSES NO JAVASCRIPT

class Carro {
  // Nome de classes devem iniciar com a primeira letra maiúscula

  //ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //MÉTODOS

  buzinar() {
    return "beep! Beep!";
  }
}

//CRIANDO UMA INSTÂNCIA (OBJETO) DA CLASSE CARRO
const carroPopular = new Carro("Fiat", "Uno", "2012");
//ACESSANDO OS ATRIBUTOS E MÉTODOS DO OBJETO
document.write(`<p> O carro ${carroPopular.marca}
    , modelo ${carroPopular.modelo} é do ano 
    ${carroPopular.ano} e quando ele buzina faz 
    ${carroPopular.buzinar()} </p>`);
