//Компьютер загадывает число от 1 до n. У пользователя k попыток отгадать. 
//После каждой неудачной попытки компьютер сообщает меньше или больше загаданное число. 
//В конце игры текст с результатом (или “Вы угадали”, или “Попытки закончились”).
import readlineSync from "readline-sync";
let n = 10;
let k = 3;
guessNumber();

function makeNumber() {
    const computerNumber = Math.floor(Math.random() * n) + 1;
    return computerNumber;
}

function guessNumber() {
    const computerNumber = makeNumber(n);
    let attemption = 1;
    let guess = false;
    while (attemption <= k) {
        const guessNumber = parseInt(readlineSync.question("Введите число:\n> "));
        if (guessNumber === computerNumber) {
            console.log("Вы угадали!");
            guess = true;
            break;
        }
        attemption++;
    }
    if (!guess) {
        console.log("Попытки закончились");
    }
}
