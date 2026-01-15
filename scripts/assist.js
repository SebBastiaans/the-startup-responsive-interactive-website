const MenuBtn = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

MenuBtn.addEventListener('click', function(){
    menu.classList.toggle('hamburgerMenu-open')
    document.body.classList.toggle('menu-open')
    if (document.body.classList.contains('menu-open')) {
        document.querySelector('#menu-label').textContent = 'close'
    } else {
        document.querySelector('#menu-label').textContent = 'menu'
    }
})
