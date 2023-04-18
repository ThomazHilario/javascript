//button
let button = document.getElementById('click')
//modal
let modal = document.getElementById('modal')

//função

button.addEventListener('click',function(){
    button.style.display = 'none'
    modal.style.display = 'block'
})
document.addEventListener('keydown',function(event){
   let Esc = event.key == 'Escape'
   if(Esc){
    modal.style.display = 'none'
    button.style.display = 'block'
   }
})
