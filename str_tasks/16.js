//Удалить в строке все цифры.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


for (let i = 0; i < numbers.length; ++i) {
    str = str.split(numbers[i]).join("");
}
console.log(str);