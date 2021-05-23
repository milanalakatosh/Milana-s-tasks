//Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let replacement = false;
let creasing = true;

for (let i = 0; i < array.length - 1; ++i) {
    if (array[i] >= array[i + 1] && replacement === false) {
        creasing = false;
        if (array[i-1] < array[i+2] || i === 0 || array[i+1] === array.length-1) {
            replacement = true;
        } else {
            replacement = false;
            break;
        }
    } 
}
console.log(creasing ? "Массив возрастающий"
    : replacement ? "Из массива можно вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию."
    : "Из массива нельзя вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.");

    //ошибка при [1.1,1,1,1] и при [1,1,1,1]-возрастающий