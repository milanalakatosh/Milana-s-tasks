//Проверьте, содержит ли данный массив a из n чисел, все числа от 1 до n.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let n = parseInt(readlineSync.question("Введите количество чисел:\n> "));
let containsAllNumbers = false;

for (let j = 1; j < n; ++j) {
    if (a.includes(j)) {
        containsAllNumbers = true;
    } else {
        containsAllNumbers = false;
        break;
    }
}

console.log(containsAllNumbers ? "данный массив содержит все числа от 1 до " + n
    : "данный массив не содержит все числа от 1 до " + n);
