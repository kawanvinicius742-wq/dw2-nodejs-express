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

// CRIANDO UMA NOVA INSTÂNCIA: CARRO CONVERSÍVEL
const carroConversivel = new Carro();
carroConversivel.marca = "Chevrolet";
carroConversivel.modelo = "Camaro";
carroConversivel.ano = "2026";

//ADICIONANDO UM NOVO ATRIBUTO (NÃO PREVISTO NA CLASSE)
carroConversivel.corNeon = "azul";
//ADICIONANDO UM NOVO MÉTODO (NÃO PREVISTO NA CLASSE)
carroConversivel.turbo = function () {
  return "Vrummm! O carro está acelerando!!!";
};

document.writeln(
  `O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor ${carroConversivel.corNeon}.`,
);

document.writeln(`<p>${carroConversivel.turbo()}</p>`);
