const fs = require('fs')
const {exec, execFile} = require('child_process')

if (fs.existsSync('./txtdir/newtxt.txt')){
    fs.readFile('./txtdir/newtxt.txt',(err, data) => {
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })
}

else{
    fs.writeFile('./txtdir/newtxt.txt','eu sou um novo arquivo',() => {
        console.log("ARQUIVO CRIADO")
    })
    fs.readFile('./txtdir/newtxt.txt', (err,data) => {
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })
}
//executa comandos de shell
exec('cd .. && ls', (err, stdout,stderr) => {
    if(err){
        console.error(`erro: ${err.message}`)
        return
    }

    if(stderr){
        console.error(`standard erro: ${stderr.message}`)
        return
    }

    console.log(`stdout: ${stdout.message}`)

})

if(fs.existsSync('./exerc/ex.js')){
    exec('node ./exerc/ex.js', (err,stdout,stderr) => {
        if(err){
            console.error(`erro: ${err.message}`)
            return
        }
    
        if(stderr){
            console.error(`standard erro: ${stderr.message}`)
            return
        }
    
        console.log(`stdout: ${stdout.message}`)
    })
}

else{
    fs.writeFile('./exerc/ex.js',"console.log('Hello world')", () => {
        console.log("arquivo ex.js criado")
    })
    exec('node ./exerc/ex.js', (err,stdout,stderr) => {
        if(err){
            console.error(`erro: ${err.message}`)
            return
        }
    
        if(stderr){
            console.error(`standard erro: ${stderr.message}`)
            return
        }
    
        console.log(`stdout: ${stdout.message}`)
    })

}
