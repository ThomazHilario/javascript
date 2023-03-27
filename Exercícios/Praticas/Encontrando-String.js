//Buscando string em um objeto
function seachstring(objeto){
    for(let i in objeto){
        if(typeof objeto[i] === "string"){
            console.log(i,objeto[i])
        }
    }
}
let person = {
    name:"Thomaz",
    age: 18,
    weight: "66 kg",
    school:"Colégio Cascavelense"
}

seachstring(person)