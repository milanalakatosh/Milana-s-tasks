//Дан массив. Заменить все числа, меньшие последнего элемента массива, на первый элемент.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));

for (let i = 1; i < a.length-1; ++i ) {
    if (a[i] < a[a.length-1]) {
        a[i] = a[0];
    }
}
console.log(a);