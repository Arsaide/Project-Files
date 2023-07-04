import $ from "../core";

$.prototype.html = function(content) {
    for(let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) {
    const swap = this[i],
          objLength = Object.keys(this).length;

    for(let i = 0; i < objLength; i++) {
        delete this[i]; // объект будет пустой и мы сможем сформировать его заново
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode,
          childs = [...parent.children];
          
    const findMyIndex = (item) => {
        return item == this[0];
    };
    
    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) {
    let numberOfItems = 0, // Общее количество которое получилось
        counter = 0; // Количество записанных элементов

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector); // каждый элемент найденный по селектору
        if(arr.length == 0) {
            continue; // Пропускам итерацию
        }

        for(let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;    
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0; // Сколько нашли элементов благодаря функции closest

    for(let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function() {
    let numberOfItems = 0, // Общее количество которое получилось
        counter = 0; // Количество записанных элементов

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children; // каждый элемент найденный по селектору

        for(let j = 0; j < arr.length; j++) {
            if(copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;    
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};