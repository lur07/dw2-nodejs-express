// o aquivo index o principal do projeto

//importando o Modulo do express
const express = require("express")

//criando um instancia do Expres
const app = express()

//CONFIGURANDO O EJS
app.set('view engine', 'ejs')

//CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function (req, res) {
  res.render("index");
});

//CRIANDO A ROTA DE PERFIL DO USUARIO
app.get ("/perfil", (req,res)=>{
    // rest.send("<h2>Bem vindo ao seu perfil!<> "); 
res.render("perfil")
});

//CRIANDO A ROTA DE CLIENTES DO USUARIO
app.get ("/clientes", (req,res)=>{
    // rest.send("<h2>Bem vindo ao seu perfil!<> "); 
res.render("clientes")
});

//CRIANDO A ROTA DE PRODUTOS DO USUARIO
app.get ("/produtos", (req,res)=>{
    // rest.send("<h2>Bem vindo ao seu perfil!<> "); 
res.render("produtos")
});

//CRIANDO A ROTA DE SERVIÇOS DO USUARIO
app.get ("/servicos", (req,res)=>{
    // rest.send("<h2>Bem vindo ao seu perfil!<> "); 
res.render("servicos")
});


// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, function(error) {
    if (error){
        console.log("Ocorreu um erro ao iniciar o servidor !");
    } else {
        console.log(`Servidor  Iniciado com sucesso no endereço: http://localhost:${port}`);
    }

});
