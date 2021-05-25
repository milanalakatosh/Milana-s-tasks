//Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let replacement = true;
let moreThenOneOfreplacement = false;

for (let i = 0; i < array.length - 1; ++i) {
    if (array[i] > array[i+1]) {
        if (!moreThenOneOfreplacement) { //|| array[i] > array[i+2]) {
            replacement = true;
            moreThenOneOfreplacement = true;
            //break;
        } else //moreThenOneOfreplacement = true; {
            replacement = false;
        }
    }


console.log(replacement ? "Из массива можно вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию."
    : "Из массива нельзя вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.");