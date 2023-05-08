/* Promise */
// É um objeto JavaScript com a promessa de que algo vai acontecer.
// Usado para Operações assíncronas.(carregar arquivo e leitura de dados de uma API)

/* Estados de uma promisse */

// Pending: Estado inicial, assim que o objeto da promessa é iniciado/criado.
// Fulfilled: A promessa foi concluida com sucesso
// Reject: A promessa foi rejeitada.
// Settled: seja com sucesso ou com erro,ela foi finalmente concluida.

/* Promise no código */

// Declaramos uma variável,e esta variável recebe um new promisse,e passa uma função

// os parâmetros da função são o resolve,reject e eles tem que retornar algo  se a promessa foi aceita ou rejeitada.

// depois de return algo,pegamos o resultado e tratamos ele.Se for aceito usa o .then((result) => {}),se for rejeitada .catch((erro) => {}),e quando acabar sendo aceita ou rejeitada terminamos a promessa com .finally((encerrou) => {})

console.log('Pedir uber')

let requisição = false

let promessa = new Promise(function (resolve,reject){
    if(requisição){
        resolve('requisição aceita')
    } else{
        reject('Requisição rejeitada')
    }
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => (console.log('promessa finalizada')))

console.log('aguardando')

/* Promise com fetch */
// fetch(): Função que recebe como argumento auma url ,no qual vai buscar na url requisição de dados desta url para serem consumidaspelo programador, normalmente a fetch é uma promessa pendente(pending).

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(resposta => resposta.json())

/* encadeamento de then */

.then(dado => fetch(dado.name))
.then(name => name.json())
.then(result => console.log(result))

/* Promisse com axios */

// Biblioteca Axios: É um HTTP cliente baseado em promessas usada no browesr e no node.js.

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(result => axios.get(result.name))
    .then(name => console.log(name))

/* Promises em paralelo */

// Executar mais de uma promessa ao mesmo tempo.
// Promise.all([]), dentro do promise.all usamos o fetch ou axios para fazer as requisições.Ambas serão partes de um array.

Promise.all([
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto'),
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto/stats')
])
.then(resposta => {
    console.log(resposta[0].name)
    console.log(resposta[1].moves)
})
.catch(erro => {console.log(erro)})

/* async e await */
// Funções assincronas
// Maneira de escrever promise mais simples.


const promessa2 = new Promise((resolve)=>{
    return resolve('ola')
})

async function dados(){
    try{
        console.log(await promessa2)
    }catch (e){
        console.log(e)
    } finally{
        console.log('finalizado')
    }
}