const express = require('express');
const req = require('express/lib/request');
const app = express();

//Criação do servidor e definição da porta de rede.
app.listen(3000)

//Configuração da engine de visualização
app.set('view engine', 'ejs')
app.set('views', './html')

app.get('/', (req,res) => {
    //uso do render para q a engine funcione corretamente
    const blogContent = [
        {title:"Yoshi finds eggs", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."},
        {title:"Mario jumps", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."},
        {title:"Bowser capture's Peach", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."}
    ]
    res.render('index', {title:'Home page', blogs: blogContent})
})

app.get('/404', (req,res) => {
    res.render('404')
})

app.get('/about', (req,res) => {
    res.render('about', {title:'About Page'})
})

app.get('/create', (req,res) => {
    res.render('create', {title:'Blog page'})
})

//Redirecionamento
//Usado para em casos de código de retorno 301 para redirecionar para uma página no qual o path de fato se encontra
app.get('/about-us', (req,res) => {
    res.redirect('/about')
})

//Código 404 (app.use)
//Usado em último caso quando a URL não atinge nenhuma das outras rotas especificadas
app.use((req,res) => {
    res.status(404).render("404", {title:'404 error'})
}
    )