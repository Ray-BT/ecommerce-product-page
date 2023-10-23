const menu = document.querySelector('.nav-menu')
const hamburguer = document.querySelector('.hamburguer')
const menuclose = document.querySelector('#menuclose')

const cart = document.querySelector('.cart')
const btnCart = document.querySelector('.btnCart')


hamburguer.addEventListener('click', onHamburguerClick)
menuclose.addEventListener('click', onMenuCloseClick)

btnCart.addEventListener('click', openCart)

function onHamburguerClick() {
    menu.classList.remove('hidden')
}

function onMenuCloseClick() {
    menu.classList.add('hidden')
}

function openCart() {
    cart.classList.toggle("hidden")
}