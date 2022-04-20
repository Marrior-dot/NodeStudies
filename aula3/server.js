const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request made')
    //console.log(req.url, req.method)

    //Escrevendo String
    /*
    res.setHeader('Content-Type','text/plain'); 
    res.write('Hello, ninjas');
    */

    //Escrevendo HTML
    /*
    res.setHeader('Content-Type', 'text/html')
    res.write("<h1> Hello World </h1>")
    ;
    */

    //Importando HTML no back-end
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./html/index.html',(err, data) => {
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