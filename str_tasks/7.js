//замените в строке все вхождения 'word' на 'letter'.
//решить через replace
//решить через split/join;
const readlineSync = require("readline-sync");

// let str = readlineSync.question("Введите строку:\n> ");
// str = str.replace("word", "letter");
// console.log(str);

let str2 = readlineSync.question("Введите строку:\n> ");
console.log(str2.split("word").join("letter"));

