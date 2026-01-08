const openBtn = document.querySelector('nav > button')
const closeBtn = document.querySelector('.hamburgerMenu button')
const menu = document.querySelector('.hamburgerMenu')

openBtn.addEventListener('click', function(){
    menu.classList.add('hamburgerMenu-open')
})

closeBtn.addEventListener('click', function(){
    menu.classList.remove('hamburgerMenu-open')
})