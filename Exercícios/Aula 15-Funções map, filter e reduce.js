/* Map */

// É uma função usada para percorrer arrays de maneira simples e facil.

// No exemplo abaixo vamos usar o map para percorrer cada elemento do array e mudar o tipo de dado do elemento de string para number.

let lista_numeros = ['1','2','3','4','5','6','7','8','9','10']

console.log(lista_numeros.map(r => Number(r)))

// Importante dizer que o map é uma função que recebe um argumento e este argumento pode ser tratado: map(r => r)

/* Filter */
//Serve para filtrar um array com base em true e false para cada elemento do array, A função pode passar até três parâmetros,filter((item,index,array)),vale lembrar que o filter retornará um novo array, por isto deve armazenar este novo array em uma variável.

// No exercício abaixo iremos filtrar os nomes ds pessoas que tiveram nota acima de 6

const resultadoProvas = [
    {name:'Thomaz',nota:9.5},
    {name:'Lincoln',nota:10},
    {name:'Luiz',nota:5.5},
    {name:'Arthur',nota:5},
]

const alunosAprovados = resultadoProvas.filter(aluno => aluno.nota > 6)

console.log(alunosAprovados)

/* reduce */
// A função reduce permite percorrer um array, retornando um unico valor que pode ser o total de uma soma,divisão,multiplicação e etc, entre os elementos.
//A função reduce recebe dois argumento sendo o primeiro o valor que ira receber a soma do segundo argumento

const salario = [1000,2000,3000,4000]

const total = salario.reduce((a,b) => a += b)

console.log(total)