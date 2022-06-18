const fs = require('fs')

const file = process.argv[2]
fs.readFile(file, function (err, data) { // Se não houver nenhum erro, você deve ter seu objeto Buffer como segundo argumento
    if(err) {
        return console.log(err)
    } 

    const str = data.toString()
    const array = str.split('\n')

    console.log(array.length - 1)
})

/*
Assim como readFileSync(), você pode fornecer
'utf8' como segundo argumento e colocar o callback como terceiro
argumento, assim você terá uma String ao invés de um Buffer.

fs.readFile(file, 'utf8', callback) can also be used
*/