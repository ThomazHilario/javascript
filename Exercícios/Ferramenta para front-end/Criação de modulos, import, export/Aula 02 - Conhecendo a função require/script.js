/* Objeto global */

// é um objeto javascript que pode ser acessado de qualquer lugar no código.

// acessando diretorio local, onde está o arquivo que estamos executando.

console.log(__dirname)

//caminho completo,mostrando o arquivo que estamos executando.

console.log(__filename)

/* Função require() */
// require() é uma maneira de chamar modulos nativos do js ou criados

let path = require('path')

console.log(path.basename('Opera'))