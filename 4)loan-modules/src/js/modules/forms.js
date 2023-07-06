export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: 'Loading...',
            succes: 'Thanks! We will call you back!',
            failure: 'Error! Something went wrong...'
        };
        this.path = 'assets/question.php';
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    checkMailInputs(){
        const mainInputs = document.querySelectorAll('[type="email"]');
    
        mainInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if(e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    initMask(selector) {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
    
            if(elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if(elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
    
        return await res.text();
    }

    init() {
        this.initMask();
        this.checkMailInputs(); 

        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;

                item.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item);

                this.postData(this.path, formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = this.message.succes;
                })
                .catch(() => {
                    statusMessage.textContent = this.message.failure;
                })
                .finally(() => {
                    this.clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
            });
        });
    }
    
}