// exercício 1 - mostrar dados pessoais

function showmessagem(){

    const messagem ="1- meu nome é lucas rodrigues ferreira<br><br>19<br><br>regiscity";
    
    document.write(messagem);
}

showmessagem();


// exercício 2 - divisão de dois números

const a = 20;
const b = 10;

function divisao(a, b){

    let result = a / b;

    return result;
}

let resultado = divisao(a, b);

document.write(`<br><br>2- a divisão de ${a} por ${b} é igual a ${resultado}`);


// exercício 3 - multiplicação de 3 números

const num1 = 30;
const num2 = 20;
const num3 = 10;

function multiplicacao(num1, num2, num3){

    return num1 * num2 * num3;
}

document.write(`<br><br>3- a multiplicação de ${num1} por ${num2} por ${num3} é igual a ${multiplicacao(num1, num2, num3)}.`);


// exercício 4 - verificar idade

function verificardoridade(idade){

    if (idade >= 18){
        return "4- você é maior de idade";
    } 
    else{
        return "4- você é menor de idade";
    }
}

document.write(`<br><br>${verificardoridade(19)}`);


// exercício 5 - média de duas notas

const mediafinal = function(nota1, nota2){

    const media = (nota1 + nota2) / 2;

    let resultado;

    if (media >= 7){
        resultado = "5- aprovado";
    }
    else{
        resultado = "5- reprovado";
    }

    return resultado;
}

document.write(`<br><br>${mediafinal(8, 6)}`);


// exercício 6 - triplo de um número

const triplo = x => x * 3;

const x = 200;

document.write(`<br><br>6- o triplo de ${x} é ${triplo(x)}.`);


// exercício 7 - soma de quatro números

const somar = (x, y, z, r) => {
    return x + y + z + r;
};

let n1 = 1, n2 = 2, n3 = 3, n4 = 4;

document.write(`<br><br>7- o resultado ${n1} + ${n2} + ${n3} + ${n4} = ${somar(n1, n2, n3, n4)}`);
