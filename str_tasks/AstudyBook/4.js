//Выведете самое длинное слово в предложении (слова разбиты пробелами).
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let longestWord = "";
let wordToCheck = "";

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== " ") {
        wordToCheck += str[i];
    } 
    if ((str[i] === " " && wordToCheck !== "") || i === str.length-1) {
        if (wordToCheck.length > longestWord.length) longestWord = wordToCheck;
        wordToCheck = "";
    }
}
console.log(longestWord);