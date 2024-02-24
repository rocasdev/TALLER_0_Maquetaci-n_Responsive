var button = document.getElementById('menu-button');
var nav = document.getElementById('menu');

button.addEventListener('click', function () {
    nav.classList.toggle('active');
});