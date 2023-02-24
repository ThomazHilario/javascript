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

    //decidir quantas casas decimais eu quero apos o número usando:toFixed e trocar ponto por virgula usando:Replace

    let number12 = 1222.555555
    console.log(number12.toFixed(2).replace(".",","))

/* Transformando letras maiusculas em minusculas e vice versa  */

    //maiusculas para minusculas:toLowerCase()

    let word1 = "KRATOS"
    console.log(word1.toLowerCase())

    //Minusculas para maiusculas:toUpperCase()

    console.log(word1.toLowerCase().toUpperCase())

/* Separando strings */

    //Separar um texto usamos o método split(),Que transformará o texto em um array de string baseado no argumento.

    let phrase = "você não vai jogar video game hoje"
    let phrasesplit = phrase.split(" ")
    console.log(phrasesplit)

    //Para juntar o array é possivel usar o método join(),que juntaria essas palavras ou você escolheria a forma de separar ela por meio do argumento.

    console.log("ola mundo".split(" ").join("-"))


/* Encontrar palavras especificas em um frase*/

    //Para encontrar uma palavra especifica em uma frase podemos usar o método includes("").

    let phrase3 = "hoje o dia será perfeito"

    console.log(phrase3.includes("hoje"))

/* Criando um array com construtor */    

    let myarray = new Array("a", "b","c")
    console.log(myarray)

/* Contando elementos de um array */    

    let array = [
        "a",
        {name:"thomaz"},
        function (){
            return "olá"
        }
    ]

    console.log(array.length)

/* Strings para Arrays 
    #Para transforma uma cadeia de caracteres(string) em elementos de array devemos usar o objeto Array com o método from(): Array.from()
*/    
    let word3 = "incrivel"
    console.log(Array.from(word3))


/* Manipulando Arrays */

let linguagens = ["html","Css","Js"]

//Adicionar um item no começo do array: .unsshift()
linguagens.unshift("Github")

//
//Adicionar item no final de um Array: .push()
linguagens.push("React")

//Remover item do começo em um Array: .pop()
linguagens.pop()

//Remover item do final de um Array: .shift()
linguagens.shift()

//pegar somente alguns itens de um Array usando: .slice(0,0)
//console.log(linguagens.slice(1,3))

//Remover 1 ou mais itens de um Array: .splice(0,0)
//linguagens.splice(,)

//encontrar posição de um item em um Array: indexOf("") - nome do item
let position = linguagens.indexOf("Js")
linguagens.splice(position,1)
console.log(linguagens)
