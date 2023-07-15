# Library Documentation

## JS - фукнции

1. eq(1) - номер элемента по порядку
2. find('.elem') - поиск элемента
3. closest('.elem') - 
4. siblings() - все остольные элементы
5. addClass('class') - добавляет класс
6. removeClass('class') - убирает класс
7. click(callback) -  аналог функция addEventListener('click' callback)
8. on(eventName, callback) - aналог функции addEventListener(eventName, callback);
9. off(eventName, callback) - addEventListener(eventName, callback);

## 1. HTML - компоненты

<details>
<summary>CARD</summary>

HTML:

    <div class="NAME-WRAPPER d-flex *f-space-around*">
        <div class="card">
            <img class="card-img" src="SRC" alt="PHOTO">
            <div class="card-body">
                <div class="card-title">#Card-title</div>
                <p class="card-text">Lorem ipsum</p>
                <a href="#" class="btn *btn-primary*">LINK</a>

                <!-- Для модального окна вызова -->
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>   
                
            </div>
        </div>
    </div>

</details>
<details>
<summary>MODAL WINDOW: (/sass/)</summary>

data-close - дата атрибут при нажатии на который закрывается модальное окно


data-target -  уникальный id для инициализации модального окна

data-toggle - обязательные класс модального окна

HTML - триггер для вызова модального окна:

*Может быть любым блоком! <button>, <div>, <a>*

    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>

HTML - карточки: 

    <div class="modal" id="exampleModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span> <!-- Крестик -->
                </button>
                <div class="modal-header">
                    <div class="modal-title">#TITLE</div>
                </div>
                <div class="modal-body">#TEXT</div>
                <div class="modal-footer">
                    *<button class="btn *btn-danger*" data-close>Close</button>*
                    *<button class="btn *btn-success*">Save changes</button>*
                </div>
            </div>
        </div>
    </div>

</details>


<details>
<summary>DYNAMIC MODAL WINDOW</summary>

JS code:

    $('#trigger').click(() => $('#trigger').createModal({ // #trigger - уникальный индифакатор кнопки запуска модального окна
        text: {
            title: 'Modal title',   // заголовок кнопки
            body: 'Lorem ipsum...'  // текст, содержимое кнопки
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Name button',
                    ['btn-danger', 'mr-10'],    // Классы кнопок
                    true    // Добавления атрибута data-close
                ],
                [
                    'Name button',
                    ['btn-success'],    // Классы кнопок
                    false,  // Добавления атрибута data-close
                    () => {
                        alert('Данные сохранены');
                    }   // callback функция при нажатии на кнопку
                ],
            ]
        }
    }));

</details>

<details>
<summary>TABS</summary>

Внутырь панельки так же можно поместить dropdown menu

data-tabpanel - тег по которому работают табы

tab-content__active - класс активности контента

tab-item__active - класс активности элеметов панельки

HTML - код табов:

    <div class="tab mt-20 block-center">
        <div class="tab-panel" data-tabpanel>
            <div class="tab-item tab-item__active">Content 1</div>
            <div class="tab-item">Content 2</div>
            <div class="tab-item">Content 3</div>
        </div>

        <div class="tab-content tab-content__active"> <!-- табы -->
            Lorem ipsum text
        </div>

        <div class="tab-content"> <!-- табы -->
            Lorem ipsum text                   
        </div>

        <div class="tab-content "> <!-- табы -->
            Lorem ipsum text
        </div>

    </div>

</details>


<details>
<summary>Accordions</summary>



HTML - code accordions:

    <div class="accordion block-center">
        <div class="accordion-head">
            <span>Collapse first elem</span>
        </div>
        <div class="accordion-content">
            <div class="accordion-inner">
                Text   
            </div>
        </div>

        <div class="accordion-head">
            <span>Collapse second elem</span>
        </div>
        <div class="accordion-content">
            <div class="accordion-inner">
                Text  
            </div>
        </div>
    </div>

</details>

<details>
<summary>Slider</summary>


HTML - code sliders;

    <div class="carousel" id="example">
        <ol class="carousel-indicators">
            <li class="active" data-slide-to="0"></li>
            <li data-slide-to="1"></li>
            <li data-slide-to="2"></li>
        </ol>
        
        <div class="carousel-inner">
            <div class="carousel-slides">
                <div class="carousel-item">
                    <img src="" alt="photo">
                </div>
                <div class="carousel-item">
                    <img src="" alt="photo">
                </div>
                <div class="carousel-item">
                     <img src="" alt="photo">
                </div>
            </div>
        </div>
        
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">&gt;</span>
        </a>
        
    </div>

</details>
