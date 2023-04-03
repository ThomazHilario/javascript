/* Manipulando elementos */
//textContent - altera o conteúdo do elementos, e também é possivel pegar este conteúdo para fazer outras coisas.

let titulo = document.getElementById('title')
titulo.textContent = 'Hello Word - textContent'

//innerText - troca o texto interno do elemento HTML.

let titulo2 = document.getElementById('title2')
titulo2.innerText = 'Hello Word - innerText'

//innerHTML - Posso alterar o meu conteúdo html interno,alem de usar tags html.

let titulo3 = document.getElementById('title3')

titulo3.innerHTML = 'Hello <small>Word</small> - innerHTML'

//value - altera o elemento de um input.
let input = document.getElementsByTagName('input')[0]
input.value = 'Aqui está escrito'

//Adicionando atributos como class e id usando o .setAttribute().

const texto = document.getElementsByTagName('p')[0]
texto.setAttribute('class', 'texto')
texto.removeAttribute('class')