const fs = require('fs')

//Leitura de arquivo

//err: erro da operação
//data: dado dentro do texto
fs.readFile('./pasta_treino/texto.txt', (err, data) => {
    //caso o erro seja recebido imprime o erro
    if(err){
        console.log(err)
    }
    //se não imprime o dado em formato de string
    console.log(data.toString())
})

//Modificar e criar arquivo

//Modificação
fs.writeFile('./pasta_treino/texto.txt',"hello word",() => {
    if(err){
        console.log(err)
    }
})

//Criação
fs.writeFile('./pasta_treino/texto2.txt',"novo texto", () => {
    console.log("Arquivo criado")
})

//Manipulação de Diretório
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){console.log(err)}
    })
    console.log('folder created')
}
else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
}

//Deleção de arquivos

if(!fs.existsSync('./pasta_treino/delete.txt')){
    fs.writeFile('./pasta_treino/delete.txt', 'delete me',() => {
        console.log("arquivo delete me criado")
    })
}

if(fs.existsSync('./pasta_treino/delete.txt')){
    fs.unlink('./pasta_treino/delete.txt',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted')
    })
}