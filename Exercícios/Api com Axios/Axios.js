/* inputs */
const nameInput = document.getElementById('itexto')
const button = document.getElementById('seach')

/* informações a ser mostradas */

const nameDigi = document.getElementById('name_api')
const atributeDigi = document.getElementById('atribute api')
const typeDigi = document.getElementById('type_api')
const imgDigi = document.getElementById('img_api')

/* button event */

button.addEventListener('click',function(){
        getImgDigi(nameInput.value)
        getDigimon(nameInput.value)
        getAtribute(nameInput.value)
        getType(nameInput.value)
})



/* url */

const url = "https://www.digi-api.com/api/v1/digimon/"

/* Requisições com Axios */
// usamos axios.get() passando a url para pegar as infomações fornecidas pela api

/* funções */

/* nome do digimon */

async function getDigimon(digimon){
    await axios.get(`${url}${digimon}`)
    .then(response => {
        nameDigi.innerHTML = response.data.name
    })
    .catch(error => console.log(error))
}
/* atributo do digimon */

async function getAtribute(digimon){
    await axios.get(`${url}${digimon}`)
    .then(response => {
        const atribute_api = response.data.attributes[0].attribute
        atributeDigi.innerHTML = atribute_api
    })
    .catch(erro => console.log(erro))
}
/* tipo do digimon */

async function getType(digimon){
    await axios.get(`${url}${digimon}`)
    .then(response => {
        const type_api = response.data.types[0].type
        typeDigi.innerHTML = type_api
    })
    .catch(erro => console.log(erro))
}
/* imagem do digimon */

async function getImgDigi(digimon){
    await axios.get(`${url}${digimon}`)
    .then(response => {
        imgDigi.style.display = 'block'
        imgDigi.src = response.data.images[0].href
    })
    .catch(erro => console.log(erro))
}