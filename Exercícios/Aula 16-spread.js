/* Spread */
// É uma forma de fazer copia/clone de arrays.
// Usa ...array

const sequencia1 = [1,2,3]
const novaSequencia =[...sequencia1,4,5,6]

console.log(novaSequencia)

/* crie uma variável que tenha um array com os numeros 2,4,6 e depois crie uma função com argumentos a,b,c e retorne a multiplicação entre eles, porem o argumento desta função deve ser um operador spread */

let numeros = [2,4,6]

function myFunc(a,b,c){
    return a * b * c
}

console.log(myFunc(...numeros))