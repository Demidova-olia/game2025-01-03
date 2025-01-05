let randomNumbers = []; 

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  
        [array[i], array[j]] = [array[j], array[i]];  
    }
}

// Функция для генерации и перемешивания всех чисел от 1 до 16
function generateAllNumbers() {
    randomNumbers = [];
    for (let i = 1; i <= 16; i++) {
        randomNumbers.push(i);  
    }

    shuffleArray(randomNumbers);  
    console.log('Сгенерированные и перемешанные числа:', randomNumbers);
}

// Событие для генерации чисел при движении мыши
document.querySelector('table').addEventListener('mousemove', () => {
    if (randomNumbers.length === 0) {  
        generateAllNumbers();
    }
});

// Привязка кнопок к классам
let buttons = document.querySelectorAll('button');

// Переменная для хранения последнего добавленного изображения и кнопки
let lastImageSrc = ''; 
let lastClickedButton = null;  // Сохраняем кнопку, на которую был последний клик

// Функция для добавления изображения на кнопку
function addButtonImage(buttonElement, imageSrc) {
    // Если изображения нет или оно не совпадает с текущим
    if (!buttonElement.querySelector('img')) { 
        let imageElement = document.createElement('img'); 
        imageElement.src = imageSrc; 
        buttonElement.append(imageElement);
        lastImageSrc = imageSrc; // Сохраняем текущую картинку
    }
}

// Функция для удаления картинок с обеих кнопок
function removeImagesFromButtons(button1, button2) {
    let img1 = button1.querySelector('img');
    let img2 = button2.querySelector('img');
    if (img1) {
        img1.remove(); // Удаляем изображение с первой кнопки
    }
    if (img2) {
        img2.remove(); // Удаляем изображение со второй кнопки
    }
} 

// Обработчик событий для кнопок
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let number = randomNumbers[index];  // Получаем число, соответствующее кнопке

        // Присваиваем изображение в зависимости от числа
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

        // Если кнопка была уже нажата, проверяем, совпадает ли изображение
        if (lastClickedButton && lastImageSrc !== imageSrc) {
            // Если изображения не совпадают, удаляем их с обеих кнопок
            removeImagesFromButtons(lastClickedButton, button);
            lastImageSrc = '';  // Сбрасываем переменные
            lastClickedButton = null;
        }

        // Добавляем изображение на текущую кнопку
        addButtonImage(button, imageSrc);

        // Сохраняем информацию о последней кликнутой кнопке
        lastClickedButton = button;
    });
});





// // Массив для хранения использованных чисел
// let totalButtons = 16;  // Общее количество кнопок

// // Функция для генерации уникального случайного числа от 1 до 16
// function generateUniqueNumber() {
//     let number;
//     do {
//         number = Math.floor(Math.random() * totalButtons) + 1; // Генерация случайного числа от 1 до 16
//     } while (usedNumbers.includes(number)); // Проверка, был ли номер уже выбран

//     // Добавляем новый номер в массив использованных
//     usedNumbers.push(number);

//     return number;
// }

// // Функция для добавления изображения на кнопку
// function addButtonImage(buttonElement, imageSrc) {
//     // Проверяем, если на кнопке уже есть изображение
//     if (!buttonElement.querySelector('img')) {
//         let imageElement = document.createElement('img');  // Создаем новый элемент <img>
//         imageElement.src = imageSrc;  // Устанавливаем источник изображения
//         buttonElement.append(imageElement);  // Добавляем изображение на кнопку
//     }
// }

// // Добавляем обработчик событий для каждой кнопки
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', (event) => {
//         // Генерируем уникальное число для каждой кнопки
//         let number = generateUniqueNumber();  
//         console.log(`Номер для кнопки: ${number}`);
//         console.log('Использованные номера:', usedNumbers);

//         let imageSrc = '';  // Инициализация переменной для пути изображения

//         // Присваиваем изображение в зависимости от случайного числа
//         if (number === 1 || number === 9) {
//             imageSrc = 'cat.jpg';
//         } else if (number === 2 || number === 10) {
//             imageSrc = 'bunny.jpg';
//         } else if (number === 3 || number === 11) {
//             imageSrc = 'chicken.jpg';
//         } else if (number === 4 || number === 12) {
//             imageSrc = 'cow.jpg';
//         } else if (number === 5 || number === 13) {
//             imageSrc = 'donkey.jpg';
//         } else if (number === 6 || number === 14) {
//             imageSrc = 'turkey.jpg';
//         } else if (number === 7 || number === 15) {
//             imageSrc = 'pig.jpg';
//         } else if (number === 8 || number === 16) {
//             imageSrc = 'horse.jpg';
//         }

//         // Добавляем изображение на кликнутую кнопку
//         addButtonImage(button, imageSrc);

//         // Проверяем, все ли кнопки были нажаты
//         if (usedNumbers.length === totalButtons) {
//             alert("Все кнопки нажаты! Все изображения установлены.");
//         }
//     });
// });
