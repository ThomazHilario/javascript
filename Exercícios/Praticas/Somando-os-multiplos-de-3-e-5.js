//Crie uma função que irá somar os multiplos de 3 e 5 dentro de um limite

function sum(limite){
    let multiplo_de_3 = 0
    let multiplo_de_5 = 0
    for(let i = 0;i <= limite;i++){
        if(i % 3 === 0){
            multiplo_de_3 += i
        }
        if(i % 5 === 0){
            multiplo_de_5 += i
        }
    }
    console.log(multiplo_de_3 + multiplo_de_5)
}
sum(10)