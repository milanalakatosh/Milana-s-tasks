//Создать массив из n первых чисел Фибоначчи.
const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите длину массива: "));
let array = [];

if (n >= 1) {
    array.push(1);
}
if (n > 1) {
    array.push(1);
}
for (let i = 2; i < n; ++i) {
    array.push(array[i-2] + array [i-1]);
}
console.log(array);