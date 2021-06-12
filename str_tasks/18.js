//Дано натуральное число. 
//Получить строку, в которой тройки цифр этого числа разделены пробелом, начиная с правого конца. 
//Например, число 1234567 преобразуется в 1 234 567.
const readlineSync = require("readline-sync");

let naturalNumber = readlineSync.question("Введите натуральное число:\n> ");
let revNumbers = naturalNumber.split("").reverse().join("");
let newStr ="";
let length = 0;

for (let i = 0; i < revNumbers.length; ++i) {
    newStr += revNumbers[i];
    length += 1;
    if (length === 3) {
        newStr += " "
        length = 0
    }
}
console.log(newStr.split("").reverse().join(""));
