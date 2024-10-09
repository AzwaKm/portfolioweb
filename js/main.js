// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
// Remove Toggle Icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

// Typed JS
const typed = new Typed('.multipletext', {
    strings: ['IDNBS Student', 'Software Engineer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

let slides = document.querySelectorAll('.reviews .box-container .box');
let index = 0;

function prev() {
    slides [index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides [index].classList.add('active');
}

function next() {
    slides [index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides [index].classList.add('active');
}