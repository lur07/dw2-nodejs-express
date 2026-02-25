// tipos de funções
// função simples
function showmessage() {
    const message = "<h2> Olá, bem vindo!<h2>";
    document.write(message);

}
//Invocação da função
showmessage();

// FUNÇÃO COM PARAMETRO / ARGUMENTO
const user = " Lucas Rodrigues ";

function showUserMessage(user) {
    // essa função recebe um parametro 
    document.write(`<h3>O que vc deseja fazer hoje, ${user}?</h3>`);
}
showUserMessage(user); //envio do argumento

//função com mais de um parametro
const n1 = 10;
const n2 = 5

function sum (n1, n2){
    // essa função os dois recebem os parametros
    let result = n1 + n2;
    document.write(`<p> A soma de ${n1} + ${n2} é igual a ${result}.<\p>`);

}

// invoco a função
sum(n1,n2)// enviando os argumentos

//função com retorno

const num1 = 50;
const num2 = 3;

// é indicado que as funções possuam o minimo de responsabilidades possiveis
// essa função irá multiplicar dois numeros

function mult(num1, num2) {
    return num1 * num2;

}
document. write (` o resultado da multiplicação é ${mult(num1, num2)}.`);

// FUNÇÃO COM RETORNO CONDICIONAL
const number = 15;

function parImpar(number){
    if(number % 2== 0){
        return "par";
    } else {
        return "impar";

    }
}
 document.write(`<p>O numero ${number} é ${parImpar(number)}.</p>`);

 //Função anonima
 const divisao = function (n) {
    return n / 2;
 };
 let numero = 200;

 document.write(`<p> A metade de ${numero} é ${divisao(numero)}.<p>`);


 // função da sta (arrow function) -> é um tipo de função de anonima
 const dobro = (x) => {
    return x *2;
 };
  
 const x = 300; 
 document.write (`<p> O dobro de ${x} é ${dobro(x)}.<p>`);

 //ARROW FUNCTION COM MAIS DE UM PARAMETRO 

  const calculadora = (a, operador,b) => {
    return eval (`${a} ${operador} ${b}`);

  };

  document.write (`<p> O resultado da operação matemática é ${calculadora(1100,"-", 100)}</p>`);