//Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));

let mayRemove = true;
let increasing = true;

for (let i = 0; i < array.length; ++i) {
    for (let j = 1; j < array.length; ++j) {
        if (i === 0 && array[j] === array[i+1] && array[i] >= array[j]) {
            increasing = false;
        } else if (i !== array.length-1 && mayRemove && array[j] === array[i+1] && array[i] >= array[j] && array[i] < array[i+2]) {
            increasing = false;
        } else if (i !== array.length-1 && mayRemove && array[j] === array[i+1] && array[i] >= array[j] && array[i] >= array[j+1]) {
            increasing = false;
            mayRemove = false;
            break;
        } else if (i === array.length-1 && array[j] === array[i-1] && mayRemove && array[j] >= array[i]) {
            increasing = false;
        }
    } 
}
console.log(increasing ? "Массив и так возрастающий"
    : mayRemove ? "Из массива можно вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию."
    : "Из массива нельзя вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.");