const MenuBtn = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

MenuBtn.addEventListener('click', function(){
    menu.classList.toggle('hamburgerMenu-open')
    document.body.classList.toggle('menu-open')
    if (document.body.classList.contains('menu-open')) {
        document.querySelector('#menu-label').textContent = 'close'
        MenuBtn.setAttribute('aria-expanded', 'true')
        menu.removeAttribute('inert')
    } else {
        document.querySelector('#menu-label').textContent = 'menu'
        MenuBtn.setAttribute('aria-expanded', 'false')
        menu.setAttribute('inert', '')
    }
})

// inert op ul alleen op mobile versie. https://www.youtube.com/watch?v=m7YDWNz65iI
const media = window.matchMedia("(width < 1024px)")

media.addEventListener('change', (e) => updateNav(e))

function updateNav(e){
    const isHamburger = e.matches
    if(isHamburger){
        menu.setAttribute('inert', '')
    }
    else{
        menu.removeAttribute('inert')
    }
}

updateNav(media)
