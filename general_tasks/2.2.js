const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Введите число не большее 99: "));
//35
let a = x % 10;
//a=5
let b = (x - a) / 10;

let max;
let min;

if (x >= 10) {
    if (a > b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
} else {
    max = x;
    min = x;
}
console.log(max + " - большая цифра\n" + min + " - меньшая цифра");
