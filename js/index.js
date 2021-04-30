// Open nav
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo a');
const menuLines = document.querySelectorAll('.menu__line');
const menuLineTop = document.querySelector('.menu__line--top');
const menuLineBottom = document.querySelector('.menu__line--bottom');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')) {
        menu.style.transform = 'rotate(45deg)';

        logo.style.color = '#000';

        for(let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#000';
        }

        menuLineTop.style.transform = 'rotate(90deg)';
        menuLineTop.style.marginTop = '12.5px';

        menuLineBottom.style.marginTop = '-20.5px';

        document.querySelector('body').style.overflowY = 'hidden';
        nav.style.overflowY = 'scroll';
    } else {
        menu.style.transform = 'rotate(0deg)';

        logo.style.color = '#fff';

        for(let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#fff';
        }

        menuLineTop.style.transform = 'rotate(0deg)';
        menuLineTop.style.marginTop = '0px';
        menuLineTop.style.marginBottom = '15px';
        menuLineBottom.style.marginTop = '0px';

        document.querySelector('body').style.overflowY = 'scroll';
        nav.style.overflowY = 'hidden';
    }
})