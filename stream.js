const fs = require('fs');



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

const readStream = fs.createReadStream('./pasta_treino/textStream.txt')
//console.log(readStream)