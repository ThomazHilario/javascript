//Crie uma função que se um numero for divisivel por 3 retorne fizz,se um numero for divisivel por 5 returne buzz, se for divisivel por 3 e 5 retorne fizzbuzz, e caso não seja divisivel retorne o numero.

function fizzBuzz(numero){
    if(typeof numero !== "number"){
        throw"Não é um numero"
    }
    if(numero % 3 === 0 && numero % 5 === 0){
        console.log("FizzBuzz")
    } else if(numero % 3 === 0){
        console.log("Fizz")
    } else if(numero % 5 === 0){
        console.log("Buzz")
    }else if(numero % 3 !== 0 || numero % 5 !== 0){
        console.log(numero)
    }
}

try{
    fizzBuzz(3)
}catch (e){
    console.log(e)
}