//Строка состоит из слов, разделенных одним или несколькими пробелами. 
//Поменяйте местами наибольшее по длине слово и наименьшее.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let max = "";
let min = str;
let maxWord = "";
let minWord = "";

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== " ") {
        maxWord += str[i];
        minWord += str[i];
    } 
    if ((str[i] === " " && maxWord !== "" && minWord !== "") || i === str.length - 1) {
        if (maxWord.length > max.length) max = maxWord;
        if (minWord.length < min.length) min = minWord;
        maxWord = "";
        minWord = "";
    }
}
console.log(str.replace(max, min).replace(min, max));
