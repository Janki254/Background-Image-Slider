const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left_arrow');
const rightbtn = document.getElementById('right_arrow');

let activeSlide = 0;

rightbtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

leftbtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
});

const setBgToBody = () => {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[activeSlide].classList.add('active');
};
