//Определите, есть ли в массиве повторяющиеся элементы.
const readlineSync = require("readline-sync");

//let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let array = [1,2,3,2,5];
let repeatingElements = false;

for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
        if (i !== j) {
            if (array[i] === array[j]) { 
                repeatingElements = true;
                break;
            }
        }
    }
    if (repeatingElements) break;
}
console.log(repeatingElements ? "В массиве есть поторяющиеся элементы." : "В массиве нет повторяющихся элементов.");