//Praticando váriaveis e tipo de dados

//Declarando Variáveis

var name

// Atribuição de valores

name = "Thomaz"

//que tipo de dado foi colocaddo na variavel

//console.log(typeof name)

// agrupando declarações

    let age, IsHuman

    age = 17
    IsHuman = true

    console.log(name,age,IsHuman)

 // concatenando os valores
 
 console.log("o " + name + " tem " + age + " anos")

 // interpolando valores com as templates literals

 console.log(`o ${name} tem ${age} anos`)

 // objects
 const person = {
   name: "thomaz",
   age: 17,
   weigth: 60.4,
   profission:"programador",
   isHuman:true
   
 }

 // acessar um object

 //acessar todos os valores:

 console.log(person)

 //acessar somente um dado do object usando ponto:

 console.log(`o ${person.name} tem ${person.age} anos e trabalha como ${person.profission}`)

//Arrays

let animals = [
    "dog",
    "cat",
    "fish",
    "monkey",
    "lion",
]

    //acessar todos os dados de arrays:

    console.log(animals)

    //acessar somente um valor usando colchetes:

    console.log(animals[4])


// exercícios
    
    //1. Declare uma variável de nome weight

    let weight;

    //2. Que tipo de dado é a variável acima ?

    //Resposta: underfined

    /*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name:string
        * age:Number
        * stars:Number 
        * isSubscribed:boolean
    */
   let name1,age1,stars,isSubscribed

   name1 = "thomaz"
   age1 = 17
   stars = 2.5
   isSubscribed = false

   console.log(name1, age1, stars, isSubscribed)

   /*
    4.A variável student abaixo é que tipo de dados ?

    resposta:object

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem.
    <name> de idade <age> pesa <weight> kg
    */

    //resposta ex 4.1
    let student = {
        name:"thomaz",
        age1: 17,
        stars:2.5,
        isSubscribed:false,
        weight1:60
    };

    //resposta ex 4.2

    console.log(`${student.name} de idade ${student.age1} pesa ${student.weight1} Kg`)

    let weight1 = 60

    console.log(name1 + " de idade " + age1 + " pesa " + weight1 + " kg")

    /*
    5. Declare uma variável do tipo array, de nome,students e atribua a ela nenhum valor ou seja somente o array vazio 
     */

    //Resposta ex 5

    // let students = [];

    /*

    6. Reatribua o valor para a variável acima,colocando dentro dela o objeto student da questão 4. 
    */

    //Resposta ex 6

    let students = []
    students = [
        student
    ]

    console.log(students)

    /*
    7. Coloque no console o valor da posição zero do array acima 
    */

    //Resposta ex 7
    console.log(students[0])

    /*

    8. Crie um novo student e coloque na posição 1 do array students 
    */
   let student1 = {
    name2: "lincoln",
    age2: 18,
    weight:75,
    isSubscribed:true 
   }

   students = [
    student,
    student1,
   ]

   console.log(students[1])


   