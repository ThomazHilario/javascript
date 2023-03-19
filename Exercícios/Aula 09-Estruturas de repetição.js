/* Estrutura de repetição */

/* For 
    #For significa para.
    #Para declarar o for precisamos nos atentar em três detalhes ao declara-lo;for(inicializar um variável,condição para sua continuação,expressão final).
    #dentro do for podemos colocar condicionais e outros valores como break para parar a execução e o continue que irá pular a execução de momento.
*/
for(let x = 10; x > 0;x--){
    if(x == 7){
        continue
    }else if (x == 4){
        break
    }
    console.log(x)
}


/* While 
    # Significa enquanto
    # usa quando não sabe o momento da parada.
    # Declaramos a variável antes de declarar o while
*/
let n = 0
while(n <= 10){
    console.log(n)
    n++
}

/* Do while
    # O do while,ele executa o processo e depois verifica a condição
*/
let n1 = 1
do{
    console.log(n1)
    n1++
} while(n1<= 10)

/* For of 
    # Serve para iterar qualquer caractere do tipo string ou iterar elemento de um array. 
*/

let nome = "Thomaz"
for(let name of nome){
    console.log(name)
}

let nomes = ["Ana","Breno","Cintia","Daniel","Endrick"]
for(let names of nomes){
    console.log(names)
}

/* For in 
    # Cria um loop pegando as propriedades de um objeto
*/

let student = {
    name: "Thomaz",
    age: 13,
    data_de_nascimento:"14/02/2010"
}

for(let information in student){
    console.log(information)
    console.log(student[information])
}

//usando for para somar elementos de um array

let valores = [100,200,300,400,500]
let soma = 0
for(let i = 0;i < valores.length;i++){
    soma += valores[i]
}
console.log(soma)