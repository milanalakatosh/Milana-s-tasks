//Дана строка. Показать номера символов, совпадающих с последним символом строки.
const readlineSync = require("readline-sync");

let s = readlineSync.question("Введите строку:\n> ");

for (let i = 0; i < s.length-1; ++i) {
    if (s[i] === s[s.length-1]) 
    console.log(i);
}
