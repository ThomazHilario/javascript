// manipulando dados //

/* 
    Prototype
    
        # Javascript - Baseado em Prototype.
        # Prototype chain-cadeia de caracteres,possuindo suas funcionalidades e atributos.
        # __proto__
        # serve para manipular dados de string,number,objetos,arrays e etc
*/

/*Type conversion e Type coersion

    #alteração de um tipo de dado para outro tipo de dado.
    #Type conversion- O programador muda o tipo do dado.
    #Type coersion- O JavaScript Muda o tipo de dado implicitamente.
*/

    //Type conversion

    console.log(Number("9") + 10)

    //Type coersion

    console.log("20" + 5)

/*Manipulando string e Números*/

//String para número
    let number = "2023"
    console.log(Number(number))

//Número para String

    let number2 = 1
    console.log(String(number2))


/*Contando caracteres e dígitos*/    

//Contanto Caracteres

    let palavra = "retangulo"
    console.log(palavra.length)

//Contanto Dígitos

    let number8 = 1234
    console.log(String(number8).length)

/* Casas decimais */

    //deciditr casas decimais com:toFixed e trocar ponto por virgula usando:Replace

    let number12 = 1222.555555
    console.log(number12.toFixed(2).replace(".",","))

/* Transformando letras maiusculas em minusculas e vice versa  */

    //maiusculas para minusculas:toLowerCase()

    let word1 = "KRATOS"
    console.log(word1.toLowerCase())

    //Minusculas para maiusculas:toUpperCase()

    console.log(word1.toLowerCase().toUpperCase())