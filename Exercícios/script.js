/* Fuctions (Funções) 
    #é um agrupamento de código
    #posso reutilizar este código
    #dar significado/ um nome pra minha função
*/
    function createnames() {
        console.log("thomaz")
        console.log("Albevânia")
        console.log("Valdevino")
        console.log("Jõao")
    }

/* function: expression
    #é uma função dentro de uma variável

*/

   let min = function() {

   }

/* function:parameters (parâmetros)
    #Parâmetros são dados em funções.
*/    

    function sum (number1,number2){
        console.log(number1 + number2)
    }
    //number1 e number2 são parâmetros/dados da função

    sum(2,1) //-> argument ou argumentos para os meus parâmetros.



/*Retornando valores dentro da fução
     #passar valores dentro de uma função para o resto do código usa a palavra reservada return seguida do valor.
*/

    function soma(number11,number12){
        return number11 + number12
        
    }
    let number11 = 11
    let number12 = 12
    console.log("o numero 1 é:",number11)
    console.log("O número 12 é:",number12)
    console.log(`A soma é ${soma(number11,number12)}`)

//segunda forma

    function soma2(number14,number15){
        total = number14 + number15
        return total
    }
    soma2(14,15)
    console.log(total)