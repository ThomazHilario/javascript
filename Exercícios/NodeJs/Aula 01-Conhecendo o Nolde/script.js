/* Para que serve o NodeJS */

// Desenvolver back-end e front-end com o javascript.
// Desenvolver API.(API é um local que disponibiliza dados para que outro possam consumir esses dados)
// Não é recomendado usar node caso tenha muito processamento.

/* Vantagens do NodeJS */
// Rápido na execução.
// Alta escalabilidade.
// Aplicações de ponta.

/* O que é o NodeJs? */
// Javascript Runtime Enviroment.
// Ambiente de execução do código javascript do lado do servidor.
// Troca informações com o so e o so troca informações com o hardware.

/* motor V8 */
//interpretador de JS para a linguagem de máquina.
//Focado para Chrome


/* Como funciona o nodeJS ? */

//Node possui somente uma thread que não possui bloqueio, realizando vários pedidos dos usuários, e trabalhando de maneira assincrona não esperando nada,trabalhando de uma maneira mais rapida.

/* LIBUV */
// É uma biblioteca que possui o chamado event loop.

// O event loop é uma ideia que roda o tempo todo, ele fica pegando na fila de eventos um evento que possa bloquear os demais processos na fila, pegando este evento e jogando na worker thread ate que a fila termine. 

// Observe o exemplo abaixo: no exemplo a abaixo a função c() possui um evento que atrapalha a execução do código,assim sendo mandado para a worker thread e esperando a fila terminar para voltar a fila.

function c(){
    setTimeout(() => {console.log('c')}, 1000);
}
function b(){
    console.log('b')
    return c()
}
function a(){
    b()
    console.log('a')
    return
}
a()