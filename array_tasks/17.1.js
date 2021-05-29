//Проверьте, является ли данный массив возрастающим или убывающим.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let increasing = true;
let decreasing = true;

for (let i = 0; i < array.length-1; ++i) {
    if (increasing && !(array[i] < array[i+1])) increasing = false;
    if (decreasing && !(array[i] > array[i+1])) decreasing = false;
    if (!increasing && !decreasing) break;
}
console.log(increasing ? "Массив возрастающий" : decreasing ? "Массив убывающий" : "Массив обычный");