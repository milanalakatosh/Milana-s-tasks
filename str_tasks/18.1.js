//Дано натуральное число. 
//Получить строку, в которой тройки цифр этого числа разделены пробелом, начиная с правого конца. 
//Например, число 1234567 преобразуется в 1 234 567.
const readlineSync = require("readline-sync");

let naturalNumber = readlineSync.question("Введите натуральное число:\n> ");
let arrayOfNaturalNumber = naturalNumber.split("");

for (let i = 1; i <= 2; ++i) {
    if (arrayOfNaturalNumber.length % 3 !== 0 ) arrayOfNaturalNumber.unshift(0);
    else break;
}
for (let j = 2; j < arrayOfNaturalNumber.length; j += 3) {
    arrayOfNaturalNumber[j] = arrayOfNaturalNumber[j] + " ";
}
while (arrayOfNaturalNumber[0] === 0) {
    arrayOfNaturalNumber.shift(arrayOfNaturalNumber[0]);
}
console.log(arrayOfNaturalNumber.join(""));
