//Найдите наименьший четный элемент массива a.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let min = Number.POSITIVE_INFINITY;

for (let i = 0; i < a.length; ++ i) {
    if (a[i] % 2 === 0 && a[i] < min) min = a[i];
}
console.log(min === Number.POSITIVE_INFINITY ? "Четных нет" : min);