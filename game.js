let randomNumbers = [];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function generateAllNumbers() {
    randomNumbers = [];
    for (let i = 1; i <= 16; i++) {
        randomNumbers.push(i);
    }
    shuffleArray(randomNumbers);
    console.log('Numbers:', randomNumbers);
}


document.querySelector('table').addEventListener('mousemove', () => {
    if (randomNumbers.length === 0) {
        generateAllNumbers();
    }
});

let buttons = document.querySelectorAll('button');
let lastImageSrc = '';
let lastClickedButton = null;


function addButtonImage(buttonElement, imageSrc) {
    if (!buttonElement.querySelector('img')) {
        let imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        buttonElement.append(imageElement);
    }
}


function removeImagesFromButtons(button1, button2) {
    if (button1 && button1.querySelector('img')) {
        button1.querySelector('img').remove();
    }
    if (button2 && button2.querySelector('img')) {
        button2.querySelector('img').remove();
    }
}


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let number = randomNumbers[index];
        let imageSrc = '';

        
        if (number === 1 || number === 9) {
            imageSrc = 'cat.jpg';
        } else if (number === 2 || number === 10) {
            imageSrc = 'bunny.jpg';
        } else if (number === 3 || number === 11) {
            imageSrc = 'chicken.jpg';
        } else if (number === 4 || number === 12) {
            imageSrc = 'cow.jpg';
        } else if (number === 5 || number === 13) {
            imageSrc = 'donkey.jpg';
        } else if (number === 6 || number === 14) {
            imageSrc = 'turkey.jpg';
        } else if (number === 7 || number === 15) {
            imageSrc = 'pig.jpg';
        } else if (number === 8 || number === 16) {
            imageSrc = 'horse.jpg';
        }

        
        if (button.querySelector('img')) {
            return;
        }

       
        addButtonImage(button, imageSrc);

        
        if (lastClickedButton) {
            
            if (lastImageSrc === imageSrc) {
                lastClickedButton = null; 
                lastImageSrc = '';
            } else {
                
                setTimeout(() => {
                    removeImagesFromButtons(lastClickedButton, button);
                    lastClickedButton = null;
                    lastImageSrc = '';
                }, 1000);
            }
        } else {
            
            lastClickedButton = button;
            lastImageSrc = imageSrc;
        }
    });
});
