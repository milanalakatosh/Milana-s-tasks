//Дано натуральное число. 
//Получить строку, в которой тройки цифр этого числа разделены пробелом, начиная с правого конца. 
//Например, число 1234567 преобразуется в 1 234 567.
const readlineSync = require("readline-sync");

let naturalNumber = parseInt(readlineSync.question("Введите натуральное число:\n> "));
let str = naturalNumber.toString();
let strNew = "";


for (let i = 1; i < str.length-1; i += 3) {
    let changingfElments = naturalNumber % 1000;
    str = str.replace(changingfElments, " " + changingfElments);
    naturalNumber -= changingfElments;
}
console.log(str);
