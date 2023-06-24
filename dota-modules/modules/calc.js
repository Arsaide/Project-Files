function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex, mmrs, age, experience, ratio;

    if(localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.3;
        localStorage.setItem('ratio', 0.3);
    }

    function calcTotal() {
        if(!sex || !mmrs || !age || !experience || !ratio) {
            result.textContent = '0';
            return;
        }

        if(sex === 'female') {
            result.textContent = Math.round((447.6 + (7.2 * age) + (1.1 * mmrs) - (2.3 * experience)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (11.4 * age) + (2.8 * mmrs) - (3.7 * experience)) * ratio);
        }
    }
    calcTotal();

    function initLocalSetings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }

            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSetings('#gender div', 'calculating__choose-item_active');
    initLocalSetings('.calculating__choose_big div', 'calculating__choose-item_active');

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if(input.value.match(/\D/g)) {
                input.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
                input.style.color = '#fff';
            } else {
                input.style.backgroundColor = '#fff';
                input.style.color = '#000';
            }   

            switch(input.getAttribute('id')) {
                case 'mmrs':
                    mmrs = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
                case 'experience':
                    experience = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#mmrs');
    getDynamicInformation('#age');
    getDynamicInformation('#experience');
}

export default calc;