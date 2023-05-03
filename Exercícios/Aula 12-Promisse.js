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