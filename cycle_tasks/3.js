const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите количество строк "));

let sum = 0;
let previous = 0;

for (let i = 1; i <= n; ++i) {
    sum = previous + i;
    console.log(previous + " + " + i + " = " + sum);
    previous = sum;
}


