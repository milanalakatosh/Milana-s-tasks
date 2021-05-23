//найдите количество различных элементов данного массива.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let newArray = [];

for (let i = 0; i < array.length; ++i) {
    if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
    }
}

console.log("Количество различных элементов данного массива равно " + newArray.length);