//Удалить в строке все цифры.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


for (let i = 0; i < str.length; ++i) {
    if (numbers.includes(str[i])) {
        str = str.replace(str[i], "")
        i -= 1;
    }
}
console.log(str);