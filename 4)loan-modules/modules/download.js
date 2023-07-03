export default class Download {
    constructor(triggers, path) {
        this.btns = document.querySelectorAll(triggers);
        this.path = path;
    }

    downloadItem(path) {
        const elem = document.createElement('a');

        elem.setAttribute('href', path);
        elem.setAttribute('download', 'nice_picture');

        elem.style.display = 'none';
        document.body.appendChild(elem);

        elem.click();

        document.body.removeChild(elem);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}