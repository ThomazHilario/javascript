//Faça com que a entrada de um número seja convertida em tempo
function verifyenter(number){
    if(typeof number === "number"){
        return number
    } else{
        throw "A entrada não é um número"
    }
}

function conversionEnterInTime(number){
    let enter = verifyenter(number)

    let horas = Math.floor(enter / 3600)
    enter = enter % 3600

    let minutos = Math.floor(enter / 60)
    enter = enter % 60

    console.log(`${horas}:Horas ${minutos}:Minutos ${enter}:Segundos`)
}

try{
    conversionEnterInTime(3600)
}catch(e){
    console.log(e)
}