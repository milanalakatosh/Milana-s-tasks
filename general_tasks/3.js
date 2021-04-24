// Возвести, введенное с клавиатуры число, в степень n, степень тоже вводится с клавиатуры. Возведение в степень организовать с использованием циклов.

//Enter number:
// 2
// Enter power: 10
// number = 1024

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Enter number:\n> "));
let y = parseInt(readlineSync.question("Enter power:\n> "));
let x2 = x;

for (let i = 1; i < y; ++i) {
    x *= x2;
}
console.log("number = " + x);
