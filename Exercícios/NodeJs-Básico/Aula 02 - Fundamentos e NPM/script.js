/* Objeto global */

//é um objeto javascript que pode ser acessado de qualquer lugar no código.

//acessando diretorio local, onde está o arquivo que estamos executando.

console.log(__dirname)

//caminho completo,mostrando o arquivo que estamos executando.

console.log(__filename)

/* Função require() */
//require() é uma maneira de chamar modulos nativos do js ou instalar

let path = require('path')

console.log(path.basename('opera'))

/* criar Modulos*/

//basta criar outro arquivo js e nele usar o module.exports = ...
//no arquivo original basta usar o require(./arquivo.js)

const functionmodule = require('./export.js');

console.log(functionmodule)