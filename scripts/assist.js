// const openBtn = document.querySelector('nav > button')
// const closeBtn = document.querySelector('.hamburgerMenu button')
// const menu = document.querySelector('.hamburgerMenu')

// openBtn.addEventListener('click', function(){
//     menu.classList.add('hamburgerMenu-open')
// })

// closeBtn.addEventListener('click', function(){
//     menu.classList.remove('hamburgerMenu-open')
// })

const MenuBtn = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
// const path1 = document.querySelector('.l1')
// const path2 = document.querySelector('.l2')
// const path3 = document.querySelector('.l3')

// console.log(hamburgerMenu)

MenuBtn.addEventListener('click', function(){
    menu.classList.toggle('hamburgerMenu-open')
})