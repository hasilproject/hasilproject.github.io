const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
});

// const supermenu = document.querySelector('.mainmenu');
// const nav = document.querySelector('.mainmenu');

// menuToggle.addEventListener('click', function() {
// 	nav.classList.button('.submenu');
// });