//Eventos - São ações que acontecem no sistema que nos desenvolvemos no qual vai nos alerta com uma resposta.

//existem eventos como:onclick: ao clicar,ondbclick: ao dar 2 click,onmouseover:quando o ponteiro do mouse passar em cima, onkey:ao pressionar um tecla

let h1 = document.querySelector('h1')

h1.onclick = function(){
    h1.innerHTML = 'World'
}

//Faça um evento

let body = document.querySelector('body')
let input = document.getElementsByTagName('input')[0]

input.onclick = function(){
    let h2 = document.createElement('h2')
    body.append(h2)
    h2.innerHTML = input.value
    h2.onclick = function(){
        h2.remove(h2)
    }
}

//Adicionando eventos via javascript
// Exemplo 1 - basta pegar um elementos e nele usar a função  addEventListener('tipo do eventos','função').

//Exemplo 2 - Pegar o elemento e nele usar a função do evento recebendo uma função: h1.onclick = function(){}



// Argumento event serve para mostrar as propriedades e funcionalidades que um evento tem, e que podemos usar neste evento.