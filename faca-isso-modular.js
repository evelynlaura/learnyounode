const filter = require('./mymodule.js')

const diretorio = process.argv[2]
const extensao = process.argv[3]

filter(diretorio, extensao, function (err, list) {
    if(err){
        return console.error('There was an error:', err)
    }

    for(let i = 0; i < list.length; i++){
        console.log(list[i])
    }
})