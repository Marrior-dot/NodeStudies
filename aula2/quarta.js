const fs = require('fs')


const Barch = fs.readFile("./pasta_treino/texto.txt", (err,data) => {
    console.log(data.toString())
})

fs.readFile("./pasta_treino/texto.txt",(err,data) => {

    if(err){
        console.log(err)
    }

    if(data.toString() == "NEW sTUFF"){
        console.log("arquivo já alterado")
    }
    else{
        fs.writeFile("./pasta_treino/texto.txt","NEW sTUFF",() => {
            fs.readFile("./pasta_treino/texto.txt",(err,data) => {
                console.log(data.toString())
            })
        })
    }
})

//console.log(Barch)


/*
fs.writeFile("./pasta_treino/texto.txt","NEW sTUFF", () => {
    fs.readFile("./pasta_treino/texto.txt",(err,data) => {
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })

})*/