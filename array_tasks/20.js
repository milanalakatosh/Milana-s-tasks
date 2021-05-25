//Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));

let removed = false;
let mayRemove = true;
let increasing = true;

for (let i = 0; i < array.length - 2; ++i) {
    if (array[i] >= array [i+1]) {
        increasing = false;
        if (array[i+2] > array[i] || i === 0) {
            if (!removed) removed = true;
            else {
                mayRemove = false;
                break;
            }
        } else if (array[i+2] <= array[i]) {
            mayRemove = false;
            break;
        }
    }
}
console.log(increasing ? "Массив и так возрастающий"
    : mayRemove ? "Из массива можно вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию."
    : "Из массива нельзя вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.");