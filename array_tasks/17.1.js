//Проверьте, является ли данный массив возрастающим или убывающим.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let increasing = true;
for (let i = 0; i < array.length-1; ++i) {
    if (array[i] > array[i+1]) {
        increasing = false;
        break;
    }
}
console.log(increasing ? "Массив возрастающий" : "Массив убывающий");