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

/* Switch
    # tem uma estrutura similar ao if e else porem usando outras palavras reservadas.
    # Tudo que estiver dentro de switch faz parte da minha estrutura.
    # criaremos um case para cada caso na estrututra
    # usaremos o break para parar uma instrução
    # Se não existe um caso usaremos o defaut no final
*/

let expression = "a";
switch(expression){
  case "a":
    console.log("ola")
    break
  case "b":
    console.log("Hello world!")
    break
  default:
    console.log("Digite a ou b")
    break
}

// Segundo exemplo

function calculadora(n1,operador,n2){
    let result = 0;
    switch(operador){//puxa o operador para o switch
        case "+":
            result = n1 + n2
            break
        case "-":
            result= n1 - n2
            break
        case "*":
            result = n1 * n2
            break
        case "/":
            result = n1 / n2
            break
        default:
            console.log("este operador não existe")                
    }
    return result
}
console.log(calculadora(8,"/",2))
