//Дан текст. Найти сумму имеющихся в нем чисел.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let sum = 0;
let integer = "";

for (let i = 0; i < str.length; ++i) {
    if (numbers.includes(str[i])) {
        integer += str[i];
        if (i === str.length-1) sum += parseInt(integer);
    } else if (integer !== "")  {
        sum += parseInt(integer);
        integer = "";
    }
}
console.log(sum);