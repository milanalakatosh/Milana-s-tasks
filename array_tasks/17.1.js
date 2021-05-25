//Проверьте, является ли данный массив возрастающим или убывающим.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let increasing = true;
let decreasing = true;

for (let i = 0; i < array.length-1; ++i) {
    if (increasing) {
        if (array[i] < array[i+1]) increasing = true;
        else increasing = false;
    }
    if (decreasing) {
        if (array[i] > array[i+1]) decreasing = true;
        else decreasing = false;
    }
}
console.log(increasing ? "Массив возрастающий" : decreasing ? "Массив убывающий" : "Массив обычный");