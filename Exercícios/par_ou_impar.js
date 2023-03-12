function parOrImpar(){
    let number = window.prompt("Digite um número:")
    if(number % 2 == 0){
        window.alert("Este número é Par")
    } else{
        window.alert("Este número é impar")
    }
    return number
}
let number
console.log(parOrImpar(number));
