/* 
    variáveis
        # Nomes simbólicos para receber algum valor.
        # atalhos de coódigoas
        # indentificadores
        # 3 palavras reservadas para se riar uma váriavel
            * var
            * let
            * const
*/
var nome = "Thomaz"//declarando a variável com o var.
nome = "Albevânia" //alterar valor da variável.
console.log(nome)

let idade = "17 anos" // declarando variável com o let
idade = "54 anos" // alterando a variável.
console.log(idade)

const sexo = "feminino"// declarando variável com o const.O valor do const não pode ser alterado.
console.log(sexo)

/* 
    tipos dinâmico 
        # variáveis não precisam ter um tipo previamente definido,pois o javascript ja define dinamicamente.
        # posso mudar o tipo da variável.
*/
let clima = "" // string
clima = true //mudou o tipo para boolean
clima =  3 // mudou para number
console.log(typeof clima)

/* 
    Scope e var

    Scope
        # determina a visibilidade de alguma variável
        # declaração de bloco usando somente Chaves {}

    comportamento do var antes do scope.
        # o var ele é uma variável global e local,se tiver um scope e eu antes do scope quiser saber se tem uma variável no bloco ele pega a variável sem valor ou seja underfined.

*/

console.log('existe x antes do bloco ?', x)

{
    var x = 2
}
console.log("existe x depoins do bloco ?" ,x)

/* 
    Scope let e const
        # são variáveis de escopo locais,so funcionam dentro do escopo onde foram criados
*/

{
    let idade = "8 anos"
    console.log("existe o valor idade ?" , idade)
}
{
    const nome ="sim, thomaz"
    console.log("existe o valor nome ?",nome)
}

/* 
    Nomeando variáveis
        # JS é case-sensitive(sensivel ao caso).
        #aceita cadeia unicode(aspas,acentuações,simbolos e etc...).
        -posso:
            *iniciar com $ e _
            *iniciar com letras
            *usar letras maiuscula e minuscula
            *colocar acentos
        -não posso:
            *Usar numeros
            *colocar espaços
            *usar palavras reservadas
        -ideal:
            *criar nomes que fazem sentido
            *camelcase:ex let MyNameIsThomaz = "thomaz"
            *escrever em inglês.

*/
let name = "thomaz"
let age = "18 anos"
let school = "Colégio cascavelense"
let mom = "Francisca Albevania"
let Father = "valdevino Braz Da Costa"
let ColorHair = "Black/darkgray"

console.log(name, age, school, mom, Father, ColorHair)

