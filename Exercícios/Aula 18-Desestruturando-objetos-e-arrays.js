// Podemos desestruturar um objeto criando uma variavel para cada propriedade.

// Objeto
const pessoa = {
    nome:'Thomaz',
    idade:18,
    estudante:true
}

// Desestruturando o objeto pessoa
let { nome, idade, estudante } = pessoa

// resultados:
console.log(nome)
console.log(idade)
console.log(estudante)


// -> Podemos desestruturar um array

// Array
const jogos = ['God Of War','fifa','Dark Souls','Deepwoken','My Hero Ultra Rumble']

// Desestruturando o array
let [jogo1, jogo2, jogo3, jogo4, jogo5] = jogos

// Resultados:
console.log(jogo1)
console.log(jogo2)
console.log(jogo3)
console.log(jogo4)
console.log(jogo5)