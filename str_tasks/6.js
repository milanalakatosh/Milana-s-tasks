//В данной строке найти количество цифр.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];//программа не сработала,пока цифры не поместила в кавычки.Почему это так важно?
let amountOfNumbers = 0;

for (let i = 0; i < str.length; ++i) {
    //let char = str[i]; //почему в твоем учебнике подбная задача решается через присвоение char элемента строки?
    if (numbers.includes(str[i])) amountOfNumbers += 1;
}
console.log(amountOfNumbers);

