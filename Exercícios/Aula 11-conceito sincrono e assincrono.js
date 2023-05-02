/* Javascript Síncrono e Assíncrono */

/* Sincrono */
//Tarefas que são executadas uma apos a outra(sequencial), esperam uma terminar para depois executar a proxima.(Comportamento padrão do javascript).

/* Assíncrono */
// Tarefas que são executada de maneira independentes, ou seja são executadas ao mesmo tempo, sem que uma impeça da outra começar.

/* Entendendo callbacks */
// É uma função que é passada como argumento de outra função.
// O sentido da callback é ser executada depois de uma ação ser feita.

function pegardados(num,callback){
    if(num % 2 == 0){
        console.log(`${num} é par`)
    } else{
        console.log(`${num} é impar`)
    }
    callback(num)
}
function imprimir(valor){
    console.log(`O numero testado agora foi o ${valor}`)
}

pegardados(4,imprimir)

/* Funções assíncronas: setTimeout e setIntervalt */
//setTimeout(Function(){},delay): função que recebe como parametro outra função(callback),e um tempo que está função será executada(delay).

setTimeout(function(){
    console.log('Sistema finalizado')
},5000)

// set Interval(function(){},intervalo de tempo): está função permite receber outra função como parâmetro(callback),no qual será chamada/executada durante um intervalo de tempo.

//setInterval(function mensagem(){
    //console.log('hello world')
//},1000)

/* clearTimeout() e clearInterval() */

// Podemos parar o setTimeout e o setInterval para que eles não sejam mais executados.(mais usado no setInterval).
// primeiro precisamos colocar nossos timers em uma variável.
// Para o setTimeout podemos usar conceitos de if e else para parar a execução.
// Para o setInterval podemos usar o setTimeout e depois do tempo parar o setInterval.

let dados = setInterval(function(){
    console.log('dado pegado')
},1000)

setTimeout(function(){
    clearInterval(dados)
    console.log('dados coletados com sucesso')
},11000)

