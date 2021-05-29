//замените в строке все вхождения 'word' на 'letter'.
//решить через replace
//решить через split/join;
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
str = str.replace("word", "letter");
console.log(str);

let str2 = readlineSync.question("Введите строку:\n> ");
let array = str2.split(" ");
for (let i = 0; i < array.length; ++i) {
    if (array[i] === "word") array[i] = "letter";
}
console.log(str2 = array.join(" "));

