const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request made')

    //Conteúdo em HTML
    res.setHeader('Content-Type', 'text/html')

    //variável com o caminho da pasta
    let path = './html/'

    //Pegando o url da requisição e considerando quais valores a url pode adquirir
    //Retornar os códigos de status para indicar oq tá acontecendo
    //res.statusCode = 1xx ou 2xx ou 3xx ou 4xx ou 5xx
    switch(req.url){
        case '/':
            path = path+'index.html'
            res.statusCode = 200
            break
        case '/about':
            path = path+'about.html'
            res.statusCode = 200
            break

        //Redirecionamento
        //Adicionar um novo cabeçalho e mandar junto com a resposta o código 301, o qual indica que a info está em outro endereço
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about.html')
            res.end()
            break

    //Qualquer url que não exista retorna um erro de ordem 400
        default:
            path = path+'404.html'
            res.statusCode = 404
            break
    }

    //Botando o conteúdo HTML no servidor
    fs.readFile(path ,(err, data) => {
        if(err){
            console.log(err);
            res.end()
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening to req on port 3000')
})