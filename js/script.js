const  navLinks = document.getElementById('nav-links')
const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')


openNav.addEventListener('click', () => {
    navLinks.style.display = 'block'
    openNav.style.display = 'none'
    closeNav.style.display = 'block'
})


closeNav.addEventListener('click', () => {
    navLinks.style.display = 'none'
    openNav.style.display = 'block'
    closeNav.style.display = 'none'
})