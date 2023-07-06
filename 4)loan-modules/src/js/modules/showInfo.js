export default class ShowInfo {
    constructor(triggersSelector) {
        this.btns = document.querySelectorAll(triggersSelector);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', function() {
                const sibling = this.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
            });
        });
    }

    init() {
        this.render();
    }
}


// const accordion = (triggersSelector) => {
//     const btns = document.querySelectorAll(triggersSelector);

//     btns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             this.classList.toggle('active-style');
//             this.nextElementSibling.classList.toggle('active-content');

//             if(this.classList.contains('active-style')) {
//                 this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
//             } else {
//                 this.nextElementSibling.style.maxHeight = '0px';
//             }
//         });
//     });
// };

// accordion('.accordion-heading');

// export default accordion;