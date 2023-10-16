const menu = document.querySelector('.nav-menu')
const hamburguer = document.querySelector('.hamburguer')
const menuclose = document.querySelector('#menuclose')


hamburguer.addEventListener('click', onHamburguerClick)
menuclose.addEventListener('click', onMenuCloseClick)

function onHamburguerClick() {
    menu.classList.remove('hidden')
}

function onMenuCloseClick() {
    menu.classList.add('hidden')
}