//Заполните массив длиной n случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Введите длину массива: "));
let count1 = 0;
let count0 = 0;

for (let i = 0; i < n; ++i) {
    array.push(Math.floor(Math.random()*2)); 
    if (array[i] === 1) {
        count1 += 1;
    } else {
        count0 += 1;
    }
}
while (count1 <= count0) {
    let index = Math.floor(Math.random()*n);
    if (array[index] === 0) { 
        array[index] = 1;
        count1 += 1;
        count0 -= 1;
    }
}
console.log(array);