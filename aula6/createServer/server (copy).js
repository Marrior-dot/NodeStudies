const express = require('express');
const req = require('express/lib/request');
const app = express();

//Criação do servidor e definição da porta de rede.
app.listen(3000)

//Definição da rota e recebimento de resposta e requisição
/*
app.get('/', (req,res) => {
    res.send("<h1>Hello World/h1>")
})
*/

//Definição da rota e recebimento de arquivo, root define o path de ./
app.get('/', (req,res) => {
    res.sendFile('./html/index.html', {root:__dirname});
})

app.get('/404', (req,res) => {
    res.sendFile('./html/404.html', {root:__dirname})
})

app.get('/about', (req,res) => {
    res.sendFile('./html/about.html', {root:__dirname})
})

//Redirecionamento
//Usado para em casos de código de retorno 301 para redirecionar para uma página no qual o path de fato se encontra
app.get('/about-us', (req,res) => {
    res.redirect('/about')
})

//Código 404 (app.use)
//Usado em último caso quando a URL não atinge nenhuma das outras rotas especificadas
app.use((req,res) => {
    res.sendFile('./html/404.html', {root:__dirname})
}
    )