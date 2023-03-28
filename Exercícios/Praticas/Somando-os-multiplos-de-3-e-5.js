//Crie uma função que irá somar os multiplos de 3 e 5 dentro de um limite

function sum(limite){
    soma = 0
    soma2 = 0
    for(let i = 0;i <= limite;i++){
        if(i % 3 === 0){
            soma += i
        }
        if(i % 5 === 0){
            soma2 += i
        }
        console.log(soma + soma2)
    }
}
sum(10)