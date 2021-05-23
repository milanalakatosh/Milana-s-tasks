//Поменять местами наибольший и наименьший элементы массива.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let max = Number.NEGATIVE_INFINITY;
let min = Number.POSITIVE_INFINITY;
let indexOfMAx;
let indexOfMin;
 
for (let i = 0; i < a.length; ++i) {
    if (a[i] > max) {
        max = a[i];
        indexOfMAx = i;
    }
    if (a[i] < min) {
        min = a[i];
        indexOfMin = i;
    }
}
a[indexOfMAx] = min;
a[indexOfMin] = max;
console.log(a);