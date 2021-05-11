let logo = document.querySelector('.logo');
let menuLines = document.querySelectorAll('.menu__line');
let menuLineTop = document.querySelector('.menu__line--top');
let menuLineBottom = document.querySelector('.menu__line--bottom');

// Open nav
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')) {
        menu.style.transform = 'rotate(45deg)';
        menuLineTop.style.transform = 'rotate(90deg)';
        menuLineTop.style.marginTop = '12.5px';
        menuLineBottom.style.marginTop = '-20.5px';
        document.querySelector('body').style.overflowY = 'hidden';
        nav.style.overflowY = 'scroll';
    } else {
        menu.style.transform = 'rotate(0deg)';
        menuLineTop.style.transform = 'rotate(0deg)';
        menuLineTop.style.marginTop = '0px';
        menuLineTop.style.marginBottom = '15px';
        menuLineBottom.style.marginTop = '0px';
        document.querySelector('body').style.overflowY = 'scroll';
        nav.style.overflowY = 'hidden';
        }
});