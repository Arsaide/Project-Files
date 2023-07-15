import $ from '../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target'),
              scroll = calcScroll();
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(250);
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        });
        
        // target - уникальный индифакатор
        // Скрытие модального окна
        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(250);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });
        //Скрытие при клике на подложку
        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(250);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }



    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i< this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            const [text, classNames, dataClose, callback] = btns.settings[j];
            
            let btn = document.createElement('button');
            btn.classList.add('btn', ...classNames);
            btn.textContent = text;
          
            if (dataClose) {
              btn.setAttribute('data-close', 'true');
            }
            
            if (callback && typeof callback === 'function') {
              btn.addEventListener('click', callback);
            }

            buttons.push(btn);
          }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};