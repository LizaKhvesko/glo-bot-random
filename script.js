const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ');
}

function botRandom(x) {
    let a = prompt('Угадай число от 1 до 100');  
    function answer() {
        if (a === null) {
            a = alert('Игра окончена!');
        } else if(!isNumber(a)) {
            a = prompt('Введи число!');
            answer();
        } else if(a == x) {
            a = alert('Поздравляю, ты угадал!');
        } else if (a > x) {
            a = prompt('Загаданное число меньше. Попробуй еще!');
            answer();
        } else if(a < x) {
            a = prompt('Загаданное число больше. Попробуй еще!');
            answer();
        } 
    }
    answer();
}

let work = botRandom(10);