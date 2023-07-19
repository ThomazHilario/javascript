/* Alguns métodos para objetos */

/* 
    -> expressão in
    - Com o in podemos verificar se uma propriedade existe dentro de um objeto
*/

// escreva ma função que verifique se um objeto possui a propriedade name, se true, retorne.

function verifyNameInObject(obj){
    if('name' in obj){
        return obj['name']
    } else{
        return false
    }
}

// Objeto com nome
let Thomaz = {
    name:'thomaz',
    age:18
}
console.log(verifyNameInObject(Thomaz))
//Objeto sem nome
let Lincoln = {
    age:18
}
console.log(verifyNameInObject(Lincoln))


/* 
    -> Object.getOwnPropertyNames()
    - Cria um array com as propriedades de um objeto
*/


let animes = {
    jujutsuKaisen:'Shonen',
    haikyuu:'Esporte',
    horimiya:'Romance'
}

let animes_lista = Object.getOwnPropertyNames(animes)


console.log(animes_lista)