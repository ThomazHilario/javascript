//Crie uma função que retorne se um número é primo ou não
function numberPrimo(number){
    for(let i = 2;i <= number;i++){
        let ehprimo = true
        for(let divisor = 2;divisor < number;divisor++){
            if(number % divisor === 0)
            ehprimo = false
        }
        if(ehprimo === true){
            console.log(`${number} é Primo`)
            break
        } else{
            console.log(`${number} não é primo`)
            break
        }
    }
}

numberPrimo(10)