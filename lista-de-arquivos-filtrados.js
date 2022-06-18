const fs = require('fs')
const path = require('path')

const diretorio = process.argv[2]
const extensao = '.' + process.argv[3]

fs.readdir(diretorio, function (err, list) {
    if (err) {
        return console.log(err)
    }

    for(let i = 0; i < list.length; i++){
        if(path.extname(list[i]) === extensao) {
            console.log(list[i])
        }
    } 
})