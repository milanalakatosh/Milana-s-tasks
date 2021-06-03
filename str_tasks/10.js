//Даны две строки. Первая состоит из слов, разделенных символами, которые перечислены во второй строке. 
//Разделить первую строку на слова и вывести на экран.

const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let symbol = readlineSync.question("Введите разделители:\n> ");
let symbolArray = symbol.split("");

for (let i = 0; i < str.length; ++i) {
    if (symbolArray.includes(str[i])) str = str.replace(str[i], " ");
}
let arrayNew = str.split(" ");
console.log(arrayNew);



