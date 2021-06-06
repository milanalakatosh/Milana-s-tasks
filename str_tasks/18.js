//Дано натуральное число. 
//Получить строку, в которой тройки цифр этого числа разделены пробелом, начиная с правого конца. 
//Например, число 1234567 преобразуется в 1 234 567.
const readlineSync = require("readline-sync");

let naturalNumber = parseInt(readlineSync.question("Введите натуральное число:\n> "));
let str = naturalNumber.toString();

for (let i = str.length - 4; i >= 0; i -= 3) {
    str += " ";
}
console.log(str);