//Определите количество перемен знаков элементов массива.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let amountOfchanges = 0;

for (let i = 0; i < a.length - 1; ++i) {
    if ((a[i] >= 0 && a[i+1] < 0) || (a[i] < 0 && a[i+1] >= 0)) amountOfchanges += 1;
}
console.log(amountOfchanges);
