//Заменить каждый элемент массива с четным номером на соседний слева элемент.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));

for (let i = 0; i < a.length; ++i) {
    if (i % 2 !== 0) {
        a[i] = a[i-1];
    }
}
console.log(a);
