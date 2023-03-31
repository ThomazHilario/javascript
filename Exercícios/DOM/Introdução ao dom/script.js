/* Introdução ao DOM */
// DOM - Document Object Model.
// é um HTML convertido em objeto javascript.
// A representação do DOM é tipo uma árvore de pais e filhos, criada pelo browser.
// Com o DOM podemos manipular o html usando o javascript.

//Buscar por ID-document.getElementById()

console.log(document.getElementById('title'))

//Buscar elemento pela class - document.ElementByClassName('')

console.log(document.getElementsByClassName('texto'))

//Buscar elemento pela tag - document.getElementByTagName('')

console.log(document.getElementsByTagName('h1'))

//Buscar elemento pelo seletor da css:class:.,id:# - document.querySelector('')

console.log(document.querySelector('.texto'))

//Buscar todos os elementos específicos pelo seletor de uma css - document.querySelectorAll('')

console.log(document.querySelectorAll('.texto'))