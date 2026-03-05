//Classes no Javascript
// Nome de classes ao iniciar devem ter a primeira letra em minuscula
class Carro{
  //DEFININDO ATRIBUSTOS
  constructor(marca, modelo, ano){
    // this - É UMA REFERENCIA AS INSTANCIAS QUE SERÃO CRIADAS ATRVES DESSA CLASSE
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
    //DEFININDO OS METODOS 
    buzinar() {
        return "Sai, sai sai ";
    }

  }


  //INSTNCIAS DE OBJETOS
  const carroPopular  = new Carro ("Fiat", "uno", "2012")

  document.write(`<p> O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()} </p>`,);
  
  //OBJETO CARRO ESPORTIVO
  
