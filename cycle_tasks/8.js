//Выведите  на экран строки (в последней строке n звездочек):

const readlineSync = require ("readline-sync");

let n = readlineSync.question("Введите количество звездочек: ")
let s = "*"

for (let i = 0; i < n; ++i) {
    console.log(s);
    s += "*"
}