//Faça um contador de asteriscos que ao colocar uma entrada ele diz quantos algarismos tem em cada linha
function algarism(linha){
    for(let i =0;i < linha;i++){
       let algarismo = ""
       for(let i2 = 0;i2 < linha;i2++){
        algarismo += "*"
        console.log(algarismo)
       }
    }
}
algarism(10)