/* Estrutura de repetição */
/* For 
    #For significa para.
    #Para declarar o for precisamos nos atentar em três detalhes ao declara-lo;for(inicializar um variável,condição para sua continuação,expressão final).
    #dentro do for podemos colocar condicionais e outros valores como break para parar a execução e o continue que irá pular a execução de momento.
*/
let x = 10;
for(x; x > 0;x--){
    if(x == 7){
        continue
    }else if (x == 4){
        break
    }
    console.log(x)
}