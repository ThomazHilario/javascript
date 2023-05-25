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
    getDigimon(nameInput.value)
    getAtribute(nameInput.value)
    getType(nameInput.value)
    getImgDigi(nameInput.value)
})



/* url */

const url = "https://www.digi-api.com/api/v1/digimon/"

/* Requisições com Axios */


/* função */
/* nome do digimon */

function getDigimon(digimon){
    axios.get(`${url}${digimon}`)
    .then(response => {
        const name_api = response.data.name
        nameDigi.innerHTML = name_api
    })
    .catch(error => console.log(error))
}
/* atributo do digimon */

function getAtribute(digimon){
    axios.get(`${url}${digimon}`)
    .then(response => {
        const atribute_api = response.data.attributes[0].attribute
        atributeDigi.innerHTML = atribute_api
    })
    .catch(erro => console.log(erro))
}
/* tipo do digimon */

function getType(digimon){
    axios.get(`${url}${digimon}`)
    .then(response => {
        const type_api = response.data.types[0].type
        typeDigi.innerHTML = type_api
    })
    .catch(erro => console.log(erro))
}
/* imagem do digimon */

function getImgDigi(digimon){
    axios.get(`${url}${digimon}`)
    .then(response => {
        const img_api = response.data.images[0].href
        imgDigi.style.display = 'block'
        imgDigi.src = img_api
    })
    .catch(erro => console.log(erro))
}