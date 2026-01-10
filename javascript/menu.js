const menu = document.getElementById('sideMenu');
const toggleButton = document.querySelector('.menu-toggle');

function toggleMenu(event) {
    event.stopPropagation();
    menu.classList.toggle('open');
}

document.addEventListener('click', (e) => {
    if (
        menu.classList.contains('open') &&
        !menu.contains(e.target) &&
        !toggleButton.contains(e.target)
    ) {
        menu.classList.remove('open');
    }
});