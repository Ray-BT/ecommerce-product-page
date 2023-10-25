const menu = document.querySelector('.nav-menu')
const hamburguer = document.querySelector('.hamburguer')
const menuclose = document.querySelector('#menuclose')

const cart = document.querySelector('.cart')
const btnCart = document.querySelector('.btnCart')


const btnPlus = document.querySelector('#btnPlus')
const btnMinus = document.querySelector('#btnMinus')
const productCounter = document.querySelector('.counter')

const gallery = document.querySelectorAll('.pic')
const heroImg = document.querySelector('.product-hero')

const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous')

const btnAddToCard = document.querySelector('.btn')
const cartCount = document.querySelector('.cart-count')
const productInShoppingCart = document.querySelector('.products-in-cart')

//Numerical Variables
let productCounterValue = 1
let productsInCart = 0
let price = 250.0
let discount = 0.5


hamburguer.addEventListener('click', onHamburguerClick)
menuclose.addEventListener('click', onMenuCloseClick)

btnCart.addEventListener('click', openCart)

btnPlus.addEventListener('click', productCounterPlus)
btnMinus.addEventListener('click', productCounterMinus)

gallery.forEach(img => {
    img.addEventListener('click', onThumbClick)
}) 

btnNext.addEventListener('click', handleBtnClickNext)
btnPrevious.addEventListener('click', handleBtnClickPrevious)

btnAddToCard.addEventListener('click', addToCart)


constbtnAddToCard = document.querySelector('btn')



function onHamburguerClick() {
    menu.classList.remove('hidden')
}

function onMenuCloseClick() {
    menu.classList.add('hidden')
}

function openCart() {
    cart.classList.toggle("hidden")
}

function productCounterPlus() {
    setProductCounter(1)
}

function productCounterMinus() {
    setProductCounter(-1)
}

function setProductCounter(value) {
    if ((productCounterValue + value) > 0) {
        productCounterValue += value
        productCounter.innerHTML = productCounterValue
    }

}

function onThumbClick(event) {
    //clear active state for all thumbnails
    gallery.forEach(img => {
        img.classList.remove('active')
    })
    //set active thumbnail
    event.target.parentElement.classList.add('active')
    //update hero image
    heroImg.src = event.target.src.replace('-thumbnail', '')
}

function handleBtnClickNext() {
    let imageIndex = getCurrentImageIndex()
    imageIndex++
    if (imageIndex > 4) {
        imageIndex = 1
    }
    setHeroImage(imageIndex)
}

function handleBtnClickPrevious() {
    let imageIndex = getCurrentImageIndex()
    imageIndex--
    if (imageIndex < 1) {
        imageIndex = 4
    }
    setHeroImage(imageIndex)
}

function getCurrentImageIndex() {
    const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', '')) 
    return imageIndex
}

function setHeroImage(imageIndex) {
    heroImg.src = `./images/image-product-${imageIndex}.jpg`
    //images are not sync
    gallery.forEach(img => {
        img.classList.remove('active')
    })
    //set active thumbnail
    gallery[imageIndex-1].classList.add('active')
}

function addToCart() {
    productsInCart += productCounterValue

    const productHTMLElement = `
    <div class="item">
        <img class="product-img" src="images/image-product-1-thumbnail.jpg" alt="imagem do produto">
        <div class="details">
            <div class="product-name">Autumn Limited Edition...</div>
            <div class="price-group">
                <div class="price">$${price*discount}</div> x
                <div class="count">${productsInCart}</div>
                <div class="total-amount">$375.00</div>
            </div>
        </div>
        <img id="btnDelete" src="images/icon-delete.svg" alt="icone de deletar">
    </div>
    `
    
    productInShoppingCart.innerHTML = productHTMLElement

    updateCart()
}

function updateCart() {
    updateCartIcon()
}

function updateCartIcon() {
    cartCount.textContent = productsInCart
    if (productsInCart == 0) {
        if (!cartCount.classList.contains('hidden')) {
            cartCount.classList.add('hidden')
        }
    } else {
        cartCount.classList.remove('hidden')
    }
}