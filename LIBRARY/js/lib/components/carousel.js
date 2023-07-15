import $ from "../core";

$.prototype.carousel = function() {
    for(let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
              slides = this[i].querySelectorAll('.carousel-item'),
              slidesField = this[i].querySelector('.carousel-slides'),
              indicators = this[i].querySelectorAll('.carousel-indicators li');


        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(element => {
            element.style.width = width;
        });
        


        // BTNS and INDICATORS
        let offset = 0,
            slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
               offset = 0; 
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            // CHANGE SLIDEINDEX(INDITCATORS)

            if(slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            indicators.forEach(elem => elem.classList.remove('active'));
            indicators[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if(offset == 0) {
               offset = (+width.replace(/\D/g, '') * (slides.length - 1)); 
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            // CHANGE SLIDEINDEX(INDITCATORS)

            if(slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
        });


        // CLICK ON INDICATORS
        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesField.style.transform = `translateX(-${offset}px)`;
            indicators.forEach(elem => elem.classList.remove('active'));
            indicators[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel();