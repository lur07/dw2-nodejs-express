document.write("1 e 2)<br>");
let listaClientes = [
    {
        nome: "Lucas Ferreira",
        endereco: "Rua dos Anjos",
        cpf: 53342231152
    },
    {
        nome: "Juquinha",
        endereco: "Rua Zenaide",
        cpf: 21121211221
    },
    {
        nome: "Zenina",
        endereco: "Rua Joaninha",
        cpf: 20202020202
    }    
];


listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Endereço: ${cliente.endereco} <br>
    cpf: ${cliente.cpf} <br><hr><br>
    
    `);
});

document.write("<br><br>");
document.write("3)<br>");

listaClientes.push({
    nome: "Joaquin",
    endereco: "Rua Gemgibre",
    cpf: 11122233343
});


listaClientes.forEach((cliente)=>{
document.write(`
    Nome: ${cliente.nome} <br>
    Endereço: ${cliente.endereco} <br>
    cpf: ${cliente.cpf} <br><hr><br>
    
    `);
});
document.write("<br><br>");
document.write("4)<br>");
document.write(`A quantidade de clientes cadastrado na lista é ${listaClientes.length}`);