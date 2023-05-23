/* Map */

// É uma função usada para percorrer arrays de maneira simples e facil.

// No exemplo abaixo vamos usar o map para percorrer cada elemento do array e mudar o tipo de dado do elemento de string para number.

let lista_numeros = ['1','2','3','4','5','6','7','8','9','10']

console.log(lista_numeros.map(r => Number(r)))

// Importante dizer que o map é uma função que recebe um argumento e este argumento pode ser tratado: map(r => r)