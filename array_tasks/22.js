//Передвинуть элементы массива на один вправо, при этом последний элемент массива должен встать на 
//первое место. Нельзя использовать новый массив и ничего удалять из исходного. Например:
//[1, 2, 3, 4] => [4, 1, 2, 3]
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let lastElement = a[a.length-1];

for (let i = a.length - 1; i >= 0; --i ) {
    a[i] = a[i-1];
}
a[0] = lastElement;
console.log(a);