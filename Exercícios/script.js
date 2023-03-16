/* Estrutura de repetição */

/* For 
    #For significa para.
    #Para declarar o for precisamos nos atentar em três detalhes ao declara-lo;for(inicializar um variável,condição para sua continuação,expressão final).
    #dentro do for podemos colocar condicionais e outros valores como break para parar a execução e o continue que irá pular a execução de momento.
*/
for(let x = 10; x > 0;x--){
    if(x == 7){
        continue
    }else if (x == 4){
        break
    }
    console.log(x)
}


/* While 
    # Significa enquanto
    # usa quando não sabe o momento da parada.
    # Declaramos a variável antes de declarar o while
*/
let n = 0
while(n <= 10){
    console.log(n)
    n++
}