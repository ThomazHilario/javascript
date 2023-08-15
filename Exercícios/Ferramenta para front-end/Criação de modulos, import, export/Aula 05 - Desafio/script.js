process.argv.push('--name')
process.argv.push('Thomaz')

process.argv.push('--greeting')
process.argv.push('Tudo bem ?')

console.log(process.argv)

const getFlag = require('./exports')
console.log(getFlag('--name') )  
console.log(getFlag('--greeting') )  