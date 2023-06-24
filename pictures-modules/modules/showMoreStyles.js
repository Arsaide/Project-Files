import { getResourse } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         btn.remove();
    //     });
    // });

    btn.addEventListener('click', function() {
        // getResourse('http://localhost:3000/styles') // Работает для JSON-SERVER
        getResourse('assets/db.json') // Работает ПРОСТО с файлом db.json
            // .then(result => createCards(result)) // Работает для JSON-SERVER
            .then(result => createCards(result.styles)) // Работает ПРОСТО с файлом db.json .Нужно обратится к объекту в JSON
            .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>        
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;