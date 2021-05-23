//Определите, есть ли в массиве повторяющиеся элементы.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let repeatingElements = false;

for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
        if (i !== j) {
            if (array[i] === array[j]) repeatingElements = true;
        }
    }
}
console.log(repeatingElements === true ? "В массиве есть поторяющиеся элементы." : "В массиве нет повторяющихся элементов.");