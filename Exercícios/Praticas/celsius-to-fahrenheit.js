//Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.
function celsiustofahrenheit(number){
    let fahrenheit = number.toUpperCase().includes("F")
    let celsius = number.toUpperCase().includes("C")

    if(!celsius && !fahrenheit){
        throw"Erro! não é uma entrada valida"
    }

    //Celsius para fahrenheit

    let value = Number(number.toUpperCase().replace("C",""))
    let formula = (celsius) => (celsius * 9/5) + 32
    let upgrade = "F"

    //fahrenheit para celsius
    if(fahrenheit){
        let value = Number(number.toUpperCase().replace("F",""))
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        let upgrade = "C"
        console.log(formula(value) + upgrade)
    }
    console.log(formula(value) + upgrade)
}

celsiustofahrenheit("0c")