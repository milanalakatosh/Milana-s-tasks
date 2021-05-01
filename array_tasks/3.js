//Заполнить массив длиной n последовательными нечетными числами, начиная с единицы.
const readlineSync = require("readline-sync");

let array = [];
let n = readlineSync.question("Введите длину массива: "); //забыла преобразовать в намбер.случайно заметила.Почему ошибку не выдает?
let x = 0;

while (array.length < n) {
    if (x % 2 !== 0) {
        array.push(x);
    }
    x += 1
}
console.log(array);