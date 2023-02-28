/* Expressões e Operadores */

//Expression Qualquer linha de código que resolve alguma coisa,terminada com ponto e virgula.

let number = 1;

//Operadores podem ser Binary,Unary e Ternary

//Binary

    console.log(number + 1);

//Unary

    console.log(--number)


    
/* Expressão new
    #Criar um novo objeto
*/    

let name = new String("Thomaz")
name.sobrename = "Alves"
let age = new Number("17")
console.log(name, age)


/* Operadores Unários
    #typeof:ver o tipo de dado.
    #delete:deleta alguma propriedade de um objeto.
*/

//usando typeof:

console.log(typeof "Hello Word")

//usando delete:

const pessoa = {
    name:"thomaz",
    age:17,
}
delete pessoa.age
console.log(pessoa)

/* Operadores Aritméticos   */

//Soma +

console.log(2 + 5)

//Subtração -

console.log(10 - 5)

//Multiplicação *

console.log(25 * 8)

//Divisão /

console.log(10 / 2)

//Resto de uma divisão %

console.log(25 % 4)

//incremento adicionar mais 1 a variável do tipo number usando: ++

let number1 = 10
number1++
console.log(number1)

//Decrementar diminuir 1 a variável do tipo Number usando: --

let number2 = 12
number2--
console.log(number2)

//exponencial número elevado a outro: **

console.log(2 ** 8)