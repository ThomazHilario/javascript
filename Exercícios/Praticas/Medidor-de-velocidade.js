function verifyNumber(number){
    if(typeof number === "number"){
        return number
    } else{
        throw "Erro! Não é um número"
    }
}

function calcVelocidade(value){
    const velocidade = verifyNumber(value)
    if(velocidade <= 70){
        console.log("A sua velocidade está ok")
    } else{
        const multa = (velocidade - 70) / 5
        if(multa <= 12){
            console.log("Pontos: " + multa)
        } else{
            console.log("Carteira Suspensa")
        }
    }
}

try{
    calcVelocidade(80)
}catch(e){
    console.log(e)
}