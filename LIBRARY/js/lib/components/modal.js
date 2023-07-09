import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(250);
            document.body.style.overflow = 'hidden';
        });
    }

    // Скрытие модального окна
    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(250);
            document.body.style.overflow = '';
        });
    });
    //Скрытие при клике на подложку
    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(250);
            document.body.style.overflow = '';
        }
    });
};

$('[data-toggle="modal"]').modal();