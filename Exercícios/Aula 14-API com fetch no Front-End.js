const url = ' https://pokeapi.co/api/v2/pokemon/'

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