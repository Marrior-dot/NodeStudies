const express = require('express');
const req = require('express/lib/request');
const app = express();
//Requisição do mongoose, extensão do MongoDB para react
const mongo = require('mongoose')

//URI de conexão com o mongoDB
const dbURI = 'mongodb+srv://Marrior:ev2ryday@sysdatacluster.mkj5o.mongodb.net/SysDataCluster?retryWrites=true&w=majority'

//Conexão com o Conexão, caso bem sucedida começa a aplicação na porta 3000, senão imprime o erro no terminal
mongo.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

//Configuração da engine de visualização
app.set('view engine', 'ejs')
app.set('views', './html')

//Middleware(código que roda entre a requisição e a resposta)
app.use((req,res,next) => {
    console.log("new requeste made")
    console.log("url: "+req.url)
    next()
})

//Middleware Static, dá acesso universal a uma pasta qualquer
app.use(express.static('public'))

app.get('/', (req,res) => {
    //uso do render para q a engine funcione corretamente
    const blogContent = [
        {title:"Yoshi finds eggs", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."},
        {title:"Mario jumps", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."},
        {title:"Bowser capture's Peach", snippet:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non metus ut lectus tristique blandit."}
    ]
    res.render('index', {title:'Home page', blogs: blogContent})
})

app.get('/about', (req,res) => {
    res.render('about', {title:'About Page'})
})

app.get('/create', (req,res) => {
    res.render('create', {title:'Blog page'})
})

//Código 404 (app.use)
//Usado em último caso quando a URL não atinge nenhuma das outras rotas especificadas
app.use((req,res) => {
    res.status(404).render("404", {title:'404 error'})
}
    )