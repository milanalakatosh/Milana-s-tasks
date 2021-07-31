//Компьютер загадывает число от 1 до n. У пользователя k попыток отгадать. 
//После каждой неудачной попытки компьютер сообщает меньше или больше загаданное число. 
//В конце игры текст с результатом (или “Вы угадали”, или “Попытки закончились”).
import readlineSync from "readline-sync";
playGuessNumber(3, 10);

function makeNumber(max) {
    const computerNumber = Math.floor(Math.random() * max) + 1;
    return computerNumber;
}

function playGuessNumber(attemptions, maxNumber) {
    const computerNumber = makeNumber(maxNumber);
    let guess = false;
    for (let attemption = 1 ; attemption <= attemptions; ++attemption) {
        const guessNumber = parseInt(readlineSync.question("Введите число:\n> "));
        if (guessNumber === computerNumber) {
            console.log("Вы угадали!");
            guess = true;
            break;
        } else if (guessNumber > computerNumber) {
            console.log("загаданное число меньше");
        } else {
            console.log("загаданное число больше");
        }
    }
    if (!guess) {
        console.log("Попытки закончились");
    }
}
