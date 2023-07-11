const NavEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

NavEmail.addEventListener('click', toggleMenu)

let bandera = 0;

function toggleMenu(){
    desktopMenu.classList.toggle('inactive')
}