export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
       try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
            this.oldContainer = this.oldOfficer.querySelector('.plus');
            this.newContainer = this.newOfficer.querySelector('.plus');
       } catch(e) {}
    }

    bindTriggers(container, items, counter) {
        container.addEventListener('click', () => {
            if(counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                items[counter].classList.add('fadeIn');
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if(i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    showAnimations(items) {
        items.forEach(item => {
            item.classList.add('animated');
        });
    }

    init() {
        try {
            this.showAnimations(this.oldItems);
            this.showAnimations(this.newItems);

            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);

            this.bindTriggers(this.oldContainer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newContainer, this.newItems, this.newCounter);
        } catch(e) {}
    }
}