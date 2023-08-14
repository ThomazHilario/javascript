process.argv.push('Thomaz')

process.argv.push('Alves')

console.log(process.argv)


const firstName = process.argv[2]

const lastName = process.argv[3]

console.log(`Meu Nome é ${firstName} ${lastName}`)