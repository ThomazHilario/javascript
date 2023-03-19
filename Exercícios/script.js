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

//Crie um objeto que possuirá 2 propriedades, ambas do tipo array: receitas: [] e despesas: [],depois crie ma função que irá calcular o total de receitas e despesas e irâ mostrar uma mensagem se sua familia está com saldo positivo ou negativo, seguido do valor.