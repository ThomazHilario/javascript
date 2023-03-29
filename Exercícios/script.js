/* Praticando com exercicios */

/* Sistemas de notas escolares */
//crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C D F

function calcnotas(n){
    nota = n
    if(nota < 60 && nota >= 0){
        console.log("Tirou F")
    } else if(nota >= 60 && nota < 70){
        console.log("Tirou D")
    }else if(nota >= 70 && nota < 80){
        console.log("Tirou C")
    }else if(nota >= 80 && nota < 90){
        console.log("Tirou B")
    }else if(nota >= 90 && nota <= 100){
        console.log("Tirou A")
    }else{
        console.log("Nota invalida")
    }
    return nota
}
calcnotas(0)

/* Fluxo de caixa familiar */

//Crie um objeto que possuirá 2 propriedades, ambas do tipo array: receitas: [] e despesas: [],depois crie uma função que irá calcular o total de receitas e despesas e irâ mostrar uma mensagem se sua familia está com saldo positivo ou negativo, seguido do valor.


let family = {
    receitas:[1000,1000,1000],
    despesas:[200,400,3000],
}

function calcsum(objeto){
    total = 0
    for(let i = 0;i < objeto.length;i++){
        total += objeto[i]
    }
    return total
}
function balance(){
    const receitasvalor = calcsum(family.receitas)
    const despesasvalor = calcsum(family.despesas)
    total = receitasvalor - despesasvalor
    if(total >= 0){
        console.log(`O seu saldo é positivo: ${total}`)
    }else{
        console.log(`O seu saldo é negativo: ${total}`)
    }
}
balance()

//Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

function transformgrau(grau){
    let fahrenheit = grau.toUpperCase().includes("F")
    let celsius = grau.toUpperCase().includes("C")

    if(!fahrenheit && !celsius){
        throw "Valor invalido"
    }

    //fahrenheit para celsius
    let updategrau = Number(grau.toUpperCase().replace("F",""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 
    let upgrau = "C"

    //celsius para fahrenheit
    if(celsius){
        updategrau = Number(grau.toUpperCase().replace("C",""))
        formula = (celsius) =>  celsius * 9/5 + 32
        upgrau = "F"
    }

    return formula(updategrau) + upgrau
}

try{
   console.log(transformgrau("50c"))
}catch(e){
    console.log(e)
}


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//contando as categorias e seus livros

let totalCategory = booksByCategory.length
console.log(totalCategory)
for(let i of booksByCategory){
    console.log("Categoria: " + i.category)
    console.log("Total de livros: " + i.books.length)
}

//Contando autores

function contAuthors(){
    let authors = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf() == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("total de autores: " + authors.length)
}

contAuthors()

//Contando livros de augustu cury

function augustuCury(){
    let books = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === "Augusto Cury"){
                books.push(book.title)
            }
        }
    }
    console.log(books)
}

augustuCury()

//Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

function seachbook(name){
    let books = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === name){
                books.push(book.title)
            }
        }
    }
    console.log(books)
}

seachbook("T. Harv Eker")