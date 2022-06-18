const fs = require('fs')
const path = require('path')

module.exports = (diretorio, extensao, callback) => {
    fs.readdir(diretorio, (err, list) => {
        if (err) {
            return callback(err)
        }

        list = list.filter(function(file) {
            return path.extname(file) === '.' + extensao
        })

        callback(null, list)
    })
}

/*
module.exports = (diretorio, extensao, callback) => {
    fs.readdir(diretorio, (err, list) => {
        if (err) {
            return callback(err)
        }

        const listaArquivos = list.filter( list => (path.extname(list) === '.' + extensao))

        callback(null, listaArquivos)
    })
}
*/