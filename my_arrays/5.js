//Найти в массиве все серии подряд идущих одинаковых элементов и удалить из них все элементы кроме одного.
//метод splice выдавал ошибку, тк он сдвигал длину массива?
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));

for (let i = 0; i < a.length - 1; ++i) {
    if (a[i] === a[i+1]) delete a[i];
}
console.log(a);
    