// ======================================
// EXERCÍCIO 1 - MOSTRAR DADOS PESSOAIS
// ======================================

// Função que mostra nome, idade e cidade na tela
function showMessagem(){

    // Texto que será mostrado na página
    const messagem ="<h2>1- Meu nome é Lucas Rodrigues Ferreira<br><br>19<br><br>Regiscity</h2>";
    
    // Escreve o conteúdo no HTML
    document.write(messagem);
}

// Chamando (executando) a função
showMessagem();

// Linha horizontal para separar exercícios
document.write("<hr>");


// ======================================
// EXERCÍCIO 2 - DIVISÃO DE DOIS NÚMEROS
// ======================================

// Criando duas constantes com valores
const n1 = 20;
const n2 = 10;

// Função que realiza a divisão
function divisao(n1, n2){

    // Calcula a divisão
    let result = n1 / n2;

    // Retorna o resultado
    return result;
}

// Guardando o resultado da função
let resultado = divisao(n1, n2);

// Mostrando o resultado na tela
document.write(`<h2>2- A divisão de ${n1} por ${n2} é igual a ${resultado}</h2>`);

// Separador visual
document.write("<hr>");


// ======================================
// EXERCÍCIO 3 - MULTIPLICAÇÃO DE 3 NÚMEROS
// ======================================

// Criando três números
const num1 = 30;
const num2 = 20;
const num3 = 10;

// Função que multiplica os três números
function mutiplicacao(num1, num2, num3){

    // Retorna a multiplicação
    return num1 * num2 * num3;
}

// Mostrando o resultado na tela
document.write(`<h2>3- A multiplicação de ${num1} por ${num2} por ${num3} é igual a ${mutiplicacao(num1, num2, num3)}.</h2>`);

document.write("<hr>");


// ======================================
// EXERCÍCIO 4 - VERIFICAR IDADE
// ======================================

// Função que verifica se a pessoa é maior ou menor de idade
function verificardoridade(idade){

    // Estrutura condicional
    if (idade >= 18){
        return "4- Você é Maior de idade";
    } 
    else{
        return "4- Você é Menor de idade";
    }
}

// Mostra o resultado na tela
document.write(`<h2>${verificardoridade(19)}</h2>`);

document.write("<hr>");


// ======================================
// EXERCÍCIO 5 - MÉDIA DE DUAS NOTAS
// ======================================

// Função anônima que calcula a média
const result = function(nota1, nota2){

    // Calcula a média
    const media = (nota1 + nota2) / 2;

    let resultado;

    // Verifica se foi aprovado ou reprovado
    if (media >= 7){
        resultado = "5- Aprovado";
    }
    else{
        resultado = "5- Reprovado";
    }

    return resultado;
}

// Mostra o resultado na tela
document.write(`<h2>${result(8, 6)}</h2>`);

document.write("<hr>");


// ======================================
// EXERCÍCIO 6 - TRIPLO DE UM NÚMERO
// ======================================

// Arrow Function que calcula o triplo
const triplo = x => x * 3;

// Número que será usado
const x = 200;

// Mostra o resultado na tela

document.write(`<h2>6- O triplo de ${x} é ${triplo(x)}.</h2>`);


