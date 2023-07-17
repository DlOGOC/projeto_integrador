const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static('public/assets/css'));
app.use('/js', express.static('public/assets/js'));
app.use('/img', express.static('public/assets/img'))

app.get('/index',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/index',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/dicas',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/dicas.html')
})
app.get('/form',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/form.html')
})
app.get('/login',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/login.html')
})
app.get('/report',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/report.html')
})
app.get('/registrar',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/registrar.html')
})
app.get('/eventos',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/eventos.html')
})
// para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());

// Arquivo com rotas do cadastro de pessoas
const pessoas = require('./controllers/pessoas');

// identificação da rota e da const (require) associada
app.use('/pessoas', pessoas);


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});

