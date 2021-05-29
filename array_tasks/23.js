//Дан массив из n элементов. Переставьте его элементы случайным образом.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let n = a.length;

for (let i = 0; i < a.length; ++i) {
    a[i]= a[Math.floor(Math.random()*n)];
}
console.log(a);