/* Criando e adicionado elementos a página */

//Criando elementos com document.createElement('')

const div = document.createElement('h2')

div.innerText = 'elemento adicionado'

//adicionando elemento criado a página com append ou preppend

let body = document.getElementsByTagName('body')[0]

body.append(div)