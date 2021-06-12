//Удалите в строке все буквы 'x'. за которыми следует 'abc'.
//решить более быстрым способом
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");

console.log(str.split("xabc").join("abc"));
