const readlineSync = require("readline-sync");

let x = readlineSync.question("Введите число не большее 99: ");
//15
let array = x.split('');
let min = array[0];

for (let i = 0; i < array.length; ++i) {
    if (array[i] < array[0]) {
        min = array[i];
    }
}

let max = array[0];

for (let i = 0; i < array.length; ++i) {
    if (array[i] > array[0]) {
        max = array[i];
    }
}

console.log(max + " - большая цифра\n" + min + " - меньшая цифра");


