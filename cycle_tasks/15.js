//Компьютер загадывает число от 1 до 100. У пользователя три попытки отгадать. 
//После каждой неудачной попытки компьютер сообщает меньше или больше загаданное число.
const readlineSync = require("readline-sync");

let n = Math.floor(Math.random()*101);
let attempt = 3;

for (let i = 1; i <= attempt; ++i) {
    let number = parseInt(readlineSync.question("Отгадайте число: "));
    if (number < n) {
        console.log("загаданное число больше");
    } else if (number > n) {
        console.log("загаданное число меньше");
    } else {
        console.log("ОТГАДАЛИ");
        break;
    }
}
console.log(n);

