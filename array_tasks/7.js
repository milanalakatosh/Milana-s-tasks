//Заполните массив длиной n случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Введите длину массива: "));
let length = 0;

//while (length < n/2) {
    for (let i = 0; i < n; ++i) {
        array.push(Math.floor(Math.random()*2)); 
        if (array[i] === 1) {
            length += 1;
        }
    }

console.log(array);