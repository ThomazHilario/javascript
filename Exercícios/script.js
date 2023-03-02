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


/* Grouping Operator 
    # O grouping operator nada mais é do que usarmos parênteses(),para mudar a precendência de uma expressão aritmética,ou seja mudar a resolução da expressão matemática.
*/

//Sem Parenteses ():
    let resultado1 = 20 + 2 * 3 + 4 / 3
    console.log(resultado1)

//Com Parenteses ():    
    let resultado2 = (20 + (2 * 3) + 4 ) / 3
    console.log(resultado2)


/* Operador de igual e diferente de
    #Servem Para comparar valores e retornar os dados em dados do tipo Boolean
    #Para dizer se uma variável é igual a, usamos dois simbolos de iguais seguido: ==
    #para dizer se uma variável é diferente de,usamos um símbolo de exclamação seguido de igual:!=
*/    

    let number6 = 10;
    let number7 = 12;

    console.log(number6 == 10)
    console.log(number6 != number7)
    console.log(number7 == 11)
    console.log(number7 != 12)