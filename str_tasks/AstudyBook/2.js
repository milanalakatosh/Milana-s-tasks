//Спросите n (количество слов), затем спросите по очереди эти слова, а затем выведете их через запятую.
const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("количество слов?\n> "));
let string = "";

for (let i = 1; i <= n; ++i) {
    let word = readlineSync.question(i + " word?\n> ");
    if (i !== n) string += word + ", ";
    else string += word;
}
console.log(string);