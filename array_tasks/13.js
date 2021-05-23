//Дан массив a. Найдите три последовательных элемента в массиве, сумма которых максимальна.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let max = a[2] + a [1] + a [0];
let number1 = a[0];
let number2 = a[1];
let number3 = a[2];

for (let i = 3; i < a.length; ++ i) {
    if (max < a[i] + a[i-1] + a[i-2]) {
        max = a[i] + a[i-1] + a[i-2];
        number1 = a[i-2];
        number2 = a[i-1];
        number3 = a[i];
    }
}
console.log(number1, number2, number3);