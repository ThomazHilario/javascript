/* Fazendo get */
const url = 'https://pokeapi.co/api/v2/pokemon/'

function getPokemon(pokemon){
    return fetch(`${url}${pokemon}`)
    .then(result => result.json())
    .catch(erro => console.log(erro))
}

async function pokedex(pokemon){
    try{
        const api = await getPokemon(pokemon)
        console.log(api.id)
    }catch(e){
        console.log(e)
    }
}

pokedex('charmander')

/* Fazendo Post */


const newpokemon = {
    name: 'Luiz',
    type: 'All'
}

function newPokemon(newpokemon){
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(newpokemon),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => console.log(response.json()))
}

newPokemon(newpokemon)

/* Fazendo PUT: Upgrade */

const UpgradePokemon = {
    name: 'Lincoln',
    type: 'Null'
}

function upgradePokemon(update){
    fetch(`${url}/1`,{
        method:"PUT",
        body:JSON.stringify(update),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(erro => console.log(erro))
}

upgradePokemon(UpgradePokemon)

/* Fazendo o DELETE */