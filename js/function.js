//menu
const menu = document.querySelector('.menu');
const btnMenuOpen = document.getElementById('open');
const btnMenuClose = document.getElementById('close');

btnMenuOpen.addEventListener('click', function() {
    menu.classList.add('menu_open')
});

btnMenuClose.addEventListener('click', function() {
    menu.classList.remove('menu_open')
});

//fim menu