/*Controle de fluxo da aplicação (Control Flow)
    #Controle do fluxo executado nas linhas.
*/

/*If e else
    #if (se)
    #else (se não)
*/

let temperatura = 37

if(temperatura >= 37){
    console.log("Está com febre")
} else{
    console.log("Não está com febre")
}

//podemos ter multiplas condicionais

let peso = 58;
let altura = 1.60;
let IMC = peso / altura**2

if (IMC < 18.5){
    console.log("Sua massa está abaixo")
} else if (IMC > 25 && IMC < 30){
    console.log("Está acima do peso")
} else if (IMC > 30 && IMC < 40){
    console.log("está com nivel de obsidade I")
}else{
    console.log("Esta no seu peso adequado")
}


