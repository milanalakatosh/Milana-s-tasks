//Определите, можно ли вычеркнуть из данного массива одно число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));

let mayRemove = false;
let increasing = true;

for (let i = 0; i < array.length - 1; ++i) {
    if (array[i] >= array[i+1]) {
        increasing = false;
        break;
    }
}
if (!increasing) {
    for (let toRemove = 0; toRemove < array.length; ++toRemove) {
        let increasingAfterRemoving = true;
        let prevElement;

        for (let j = 0; j < array.length-1; ++j) {
            if (j === toRemove) continue;
            if (prevElement !== undefined && prevElement >= array[j]) {
                increasingAfterRemoving = false;
                break;
            }
            prevElement = array[j];
        }    
        if (increasingAfterRemoving) {
            mayRemove = true;
            break;
        }
    }   
}
console.log(increasing ? "Массив и так возрастающий"
    : mayRemove ? "Из массива можно вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию."
    : "Из массива нельзя вычеркнуть 1 число так, чтобы оставшиеся числа оказались упорядоченными по возрастанию.");