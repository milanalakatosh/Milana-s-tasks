//Найдите количество целых чисел от a до b включительно, которые делятся на x.
const readlineSync = require ("readline-sync");

let a = parseInt(readlineSync.question("Введите начальное целое число: "));
let b = parseInt(readlineSync.question("Введите конечное целое число: "));
let x = parseInt(readlineSync.question("Введите делитель: "));

for (i = a; i <= b; ++i) {
    if (i % x === 0) {
    console.log(i);
    }
}