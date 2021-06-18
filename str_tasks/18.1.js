//Дано натуральное число. 
//Получить строку, в которой тройки цифр этого числа разделены пробелом, начиная с правого конца. 
//Например, число 1234567 преобразуется в 1 234 567.
const readlineSync = require("readline-sync");

let naturalNumber = readlineSync.question("Введите натуральное число:\n> ");
let newStr = "";

while (naturalNumber.length % 3 !== 0 ) {
    naturalNumber = "0" + naturalNumber;
}
for (let j = 0; j < naturalNumber.length; ++j) {
    newStr += naturalNumber[j];
    if ((j+1) % 3 === 0 && j !== naturalNumber.length-1) newStr += " ";
}
while (newStr[0] === "0") {
    newStr = newStr.slice(1);
}
console.log(newStr);
