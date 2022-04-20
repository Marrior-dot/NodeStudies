const fs = require('fs');
/*
if(!fs.existsSync('./pasta_treino/textStream.txt')){
    fs.writeFile("./pasta_treino/textStream.txt", "series of strings", (err) => {
        if(err){
            console.log(err)
        }
        console.log("Arquivo Criado")
    })
}
else{
    console.log("Arquivo ja existe")
}
*/
const readStream = fs.createReadStream('./pasta_treino/textStream.txt')
const writeStream = fs.createWriteStream('./pasta_treino/chunkStream.txt')
const writeStream2 = fs.createWriteStream('./pasta_treino/chunkStreama.txt')

//Event listener(on)
readStream.on('data', (chunk)=>{
    console.log("New Chunk")
    console.log(chunk.toString())
    writeStream.write("writting chunk")
    writeStream.write(chunk)
})

//executa todo o código acima
readStream.pipe(writeStream2)