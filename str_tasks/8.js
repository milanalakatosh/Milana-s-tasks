//Удалите в строке все буквы 'x'. за которыми следует 'abc'.
//решить через формирование новой строки в цикле
//решить более быстрым способом
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let strNew = "";

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== "x") strNew += str[i];
    else if (str[i+1] !== "a" && str[i+2] !== "b" && str[i+3] !== "c") strNew += str[i];
}
console.log(strNew);
