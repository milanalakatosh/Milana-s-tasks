//Создать массив из n первых чисел Фибоначчи.
import readlineSync from "readline-sync";

let n = parseInt(readlineSync.question("Введите длину массива: "));
let array = [];

for (let i = 0; i < n; ++i) {
    array.push(i < 2 ? 1 : array[i-2] + array [i-1]);
}
console.log(array);