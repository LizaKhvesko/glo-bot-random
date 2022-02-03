const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ');
}

function botRandom(x) {
    let attempts = 10;
    let a = prompt(`Угадай число от 1 до 100. Количество попыток: ${attempts}`);  
    function answer() {
        if(attempts <= 1) {
            a = alert('Попытки закончились, хотите сыграть еще?');
            if (a === undefined) {
                botRandom(Math.floor(Math.random() * 100) + 1);
            }
        } else {
        if (a === null) {
            a = alert('Игра окончена!');
        } else if(!isNumber(a)) {
            a = prompt('Введи число!');
            answer();
        } else if(a == x) {
            a = alert('Поздравляю, ты угадал! Хочещь сыграть еще?');
            if (a === undefined) {
                botRandom(Math.floor(Math.random() * 100) + 1);
            }
        } else if (a > x) {
            attempts--
            a = prompt(`Загаданное число меньше. Попробуй еще! Количество попыток: ${attempts}`);
            answer();
        } else if(a < x) {
            attempts--
            a = prompt(`Загаданное число больше. Попробуй еще! Количество попыток: ${attempts}`);
            answer();
        } 
        }
    }
    answer();
}

let work = botRandom(10);
