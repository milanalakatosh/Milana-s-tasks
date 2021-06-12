// Подсчитайте количество строчных и прописных букв в строке. 
// Считается, что в строке могут быть только английские буквы и пробелы.
const readlineSync = require("readline-sync");

let string = readlineSync.question("str?\n> ");
let upperCases = 0;
let lowerCases = 0;

for (let i = 0; i < string.length; ++i) {
    if (string[i] !== " ") {
        if (string[i] === string[i].toLowerCase()) lowerCases += 1;
        else upperCases += 1;
    }
}
console.log("Big " + upperCases, "\nSmall " + lowerCases);
