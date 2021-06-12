//Дана строка, сделайте букву каждого слова прописной (большой).
const readlineSync = require ("readline-sync");

let str = readlineSync.question("String?\n> ");
let strNew = '';

for (let i = 0; i < str.length; ++i) {
    if ((i === 0) || (str[i-1] === " ")) {
        strNew += str[i].toUpperCase();
    } else {
        strNew += str[i];
    }
}
console.log(strNew);
