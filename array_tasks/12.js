//Дан массив a и число p. Найдите два различных числа в массиве, сумма которых наиболее близка к p.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let p = parseFloat(readlineSync.question("Введите число:\n> "));
let p = 100;
let number1 = 0;
let number2 = 0;
let minDifference = Number.POSITIVE_INFINITY;

for (let i = 0; i < a.length; ++ i) {
    for (let j = 0; j < a.length; ++j) {
        if (a[i] !== a[j]) {
            let sum = a[i] + a[j];
            let difference = Math.abs(sum - p);
            if (difference < minDifference) {
                minDifference = difference;
                number1 = a[i];
                number2 = a[j];
            }
        } 
    }
}
console.log(number1, number2);