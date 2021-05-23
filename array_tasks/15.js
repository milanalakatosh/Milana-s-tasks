//В данном массиве найдите два наименьших элемента.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let min1 = Number.POSITIVE_INFINITY;
let min2 = Number.POSITIVE_INFINITY;

for (let i = 0; i < array.length; ++ i) {
    if (array[i] < min1) {
        min1 = array[i];
    } else if (array[i] >= min1 && array[i] < min2) {
        min2 = array[i];
    }
}
console.log(min1, min2);
