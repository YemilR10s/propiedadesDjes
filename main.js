/* ****************************header *********************************/

// accion para el menu fijo que cambia de color
window.addEventListener('scroll', ()=>{
    let navBar = document.getElementById('nav-bar')
    navBar.classList.toggle('scroll', window.scrollY>0)
})

// funciones para el menu responsivo

function hamburguesa(){
    let ul = document.getElementById('ul');
    ul.classList.add('active')
}

function cerrar(){
    let ul = document.getElementById('ul');
    ul.classList.remove('active')
}

/******************************** propiedades *****************************/
//// galeria 

const botones = document.querySelectorAll('.botones button')
const cards = document.querySelectorAll('.casasContainer .casas')

botones.forEach(button =>{
    button.addEventListener('click', ()=>{
        for(let casas of cards){
            casas.style.display = 'none'
            let card = casas.getAttribute('data-filter')
            if(button.textContent === card || button.textContent === 'Todas'){
            casas.style.display = 'block'

            }
        }
    })
})