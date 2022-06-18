const fs = require('fs')

const file = process.argv[2]
const buf = fs.readFileSync(file)
let str = buf.toString()

let array = str.split('\n')

console.log(array.length - 1)