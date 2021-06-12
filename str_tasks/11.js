//Дан текст. Найти сумму имеющихся в нем цифр.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let sum = 0;

for (let i = 0; i < str.length; ++i) {
    if (numbers.includes(str[i])) sum += parseInt(str[i]);
}
console.log(sum);