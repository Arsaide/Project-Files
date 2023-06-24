const images = () => {
    const imgPopup = document.createElement('div'),
          workSectition = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSectition.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.width = '720px';
    bigImage.style.eight = '540px';
    bigImage.style.minWidth = '220px';
    bigImage.style.minHeight = '140px';
    

    imgPopup.appendChild(bigImage);

    workSectition.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

};

export default images;