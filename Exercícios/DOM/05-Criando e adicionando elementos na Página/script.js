/* Criando e adicionado elementos a página */

//Criando elementos com document.createElement('')

const div = document.createElement('h2')

div.innerText = 'elemento adicionado'

//adicionando elemento criado a página com append ou preppend

let body = document.getElementsByTagName('body')[0]

body.append(div)

//Caso eu queira adicionar um elemento criado entre uma tag e outra basta usar insertBefore(),e ele recebe dois parâmetros o elementos que será adicionado e a tag na qual será adicionada antes desta.

let h3 = document.createElement('h3')

body.insertBefore(h3,div)

h3.innerHTML = 'Elemento adicionado antes do h2'