//Выведете самое длинное слово в предложении (слова разбиты пробелами).
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let array = str.split(" ");
let longestWord = array[0];

for (let i = 1; i < array.length; ++i) {
    if (array[i].length > longestWord) longestWord = array[i];
}
console.log(longestWord);