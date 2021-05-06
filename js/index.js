// Loader
const loader = document.querySelector('.loader');
const heroSubHeading = document.querySelector('.hero .subtitle');
const heroPrimaryHeading = document.querySelector('.hero .primary-title');

window.addEventListener('DOMContentLoaded', ()=> {

    // Loader Animation

    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';

    // Hero Heading Animations on Load

    heroSubHeading.style.opacity = '1';
    heroSubHeading.style.transform = 'translateY(0%)';

    heroPrimaryHeading.style.opacity = '1';
    heroPrimaryHeading.style.transform = 'translateY(0%)';

});

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
});

//Animations on Scroll
window.addEventListener('scroll', () => {
    let wScroll = this.pageYOffset;

    const whatWeDoSection = document.querySelector('.what-we-do');
    const whatWeDoHeading = document.querySelector('.what-we-do .subtitle');
    const whatWeDoText = document.querySelector('.what-we-do p');
    
    const featuredWorkSection = document.querySelector('.featured-work');
    const featuredWorkHeading = document.querySelector('.featured-work h2');
    const featuredWorkGridItems = document.querySelectorAll('.featured-work .grid__item');

    const homeServicesSection = document.querySelector('.home-services');
    const homeServicesSubheading = document.querySelector('.home-services h3');
    const homeServicesHeading = document.querySelector('.home-services h2');
    const homeServicesText = document.querySelector('.home-services .text');
    const homeServicesLinks = document.querySelectorAll('.home-services li');

    if(wScroll > (whatWeDoSection.offsetTop / 2)) {
        whatWeDoHeading.style.opacity = '1';
        whatWeDoText.style.opacity = '1';
    }

    if(wScroll > (featuredWorkSection.offsetTop / 2)) {
        featuredWorkHeading.style.opacity = '1';

        for(let i = 0; i < featuredWorkGridItems.length; i++) {
            featuredWorkGridItems[i].style.opacity = '1';
            featuredWorkGridItems[i].style.transform = 'translateY(0%)';
        }
    }

    if(wScroll > (homeServicesSection.offsetTop / 1.25)) {
        homeServicesSubheading.style.opacity = '1';
        homeServicesHeading.style.opacity = '1';
        homeServicesText.style.opacity = '1';

        for(let i = 0; i < homeServicesLinks.length; i++) {
            setTimeout(() => {
                homeServicesLinks[i].style.opacity = '1';
                homeServicesLinks[i].style.transform = 'translateY(0%)';
            }, i * 300);
        }  
    }
});