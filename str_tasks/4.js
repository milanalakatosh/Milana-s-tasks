//Дана строка. Если ее длина больше 10, 
//то оставить в строке только первые 6 символов, иначе дополнить строку символами 'o' до длины 12.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");

if (str.length > 10) str = str.slice(0,6);
else {
    while (str.length < 12) {
        str += "o";
    }
}
console.log(str);