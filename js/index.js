'use strict';
hljs.initHighlightingOnLoad();

function swipeSlider() {
    let prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        indexCurrent = document.querySelector('#current'),
        slider = document.querySelector('.slider__inner'),
        sliders = document.querySelectorAll('.slider'),
        dots = document.querySelectorAll('.dot'),
        wrapper = document.querySelector('.slider__wrapper'),
        width = window.getComputedStyle(wrapper).width;

    slider.style.transition = 'transform .5s ease-in-out';

    let offset = 0;
    let index = 1;
    prev.addEventListener('click', (e) => {
        if (offset == 0) {
            offset = parseInt(width) * (sliders.length - 1);
        } else {
            offset -= parseInt(width);
        }
        slider.style.transform = `translateX(-${offset}px)`;

        if (index == 1) {
            index = 4;
            indexCurrent.innerHTML = `0${sliders.length}`;
        } else {
            indexCurrent.innerHTML = `0${--index}`;
        }
        currentDot();
    });

    next.addEventListener('click', (e) => {
        if (offset == parseInt(width) * (sliders.length - 1)) {
            offset = 0;
        } else {
            offset += parseInt(width);
        }
        slider.style.transform = `translateX(-${offset}px)`;

        if (index == sliders.length) {
            index = 1;
            indexCurrent.innerHTML = `01`;
        } else {
            indexCurrent.innerHTML = `0${++index}`;
        }
        currentDot();
    });
    currentDot();
    function currentDot() {
        dots.forEach(currentItem => currentItem.style.opacity = '.5');
        dots[index - 1].style.opacity = '1';
    }
    dots.forEach(currentItem => {
        currentItem.addEventListener('click', (e) => {
            let slideTo = e.target.getAttribute('data-slide-to');
            index = slideTo;
            offset = parseInt(width) * (slideTo - 1);
            slider.style.transform = `translateX(-${offset}px)`;
            indexCurrent.innerHTML = `0${index}`;
            currentDot();
        });
    });
}
swipeSlider();
function fixedHeader() {
    let header = document.querySelector('.header'),
        intro = document.querySelector('#intro'),
        height = intro.getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
        let windowScroll = window.scrollY;

        if (windowScroll > height) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}
fixedHeader();
function accordion() {
    const btns = document.querySelectorAll('.projects__title'),
        imgs = document.querySelectorAll('.projects__img');
    btns.forEach((btn, i) => btn.addEventListener('click', (e) => {
        imgs.forEach(img => img.classList.remove('show'));
        imgs[i].classList.add('show');
    }));
}
accordion();