/* Navegando pelos elementos */

//pegar elementos pais usando o parentNode ou parentElement

let titulo = document.querySelector('h1')

console.log(titulo.parentElement)

//Pegando elementos filhos com childNodes.

let body = document.getElementsByTagName('body')[0]

console.log(body.childNodes)
console.log(body.children)
console.log(body.firstElementChild)

//Navegar pelos elementos irmãos

let script = document.getElementsByTagName('script')[0]

console.log(script.previousElementSibling)