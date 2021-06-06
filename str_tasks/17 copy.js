//Дана строка. 
//Определите, является ли она действительным числом. (дробная часть числа может быть отделена точкой)
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let realNumber = false;

if (isFinite(str)) realNumber = true;

console.log(realNumber ? "строка является действительным числом"
    : "строка не является действительным числом");