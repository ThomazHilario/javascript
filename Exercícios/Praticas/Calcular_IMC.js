/* Olá meu nome é Thomaz, e aqui eu fiz um código em javascript para calcular o IMC(Índice De Massa Corpórea) */


function IMC(){
    let peso = window.prompt("Qual o seu peso ?") ;
    let altura = window.prompt("Qual a sua altura ?") ;
    let IMC =peso / altura**2 ;
    if(IMC < 18.5){
        window.alert("Você está abaixo do peso")
    } else if(IMC >= 18.5 && IMC <= 24.9){
        window.alert("Você está no peso")
    }else if(IMC >= 25 && IMC <= 29.9){
        window.alert("Você está com obesidade de grau I")
    }else if(IMC > 30 && IMC <=39.9){
        window.alert("Você está com obesidade de grau II")
    }else{
        window.alert("Você esta com obesidade de grau III")
    }
}
IMC()