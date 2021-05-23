//В данном массиве найти максимальное количество одинаковых элементов.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let max = Number.NEGATIVE_INFINITY;

for (let i = 0; i < array.length; ++i) {
    let amountOfEqualElements = 1;
    for (let j = 0; j < array.length; ++j) {
        if (i !== j) {
            if (array[i] === array[j]) amountOfEqualElements += 1;
        }
    }
    if (amountOfEqualElements > max) max = amountOfEqualElements;
}
console.log(max);