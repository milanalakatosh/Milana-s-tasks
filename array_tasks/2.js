//Заполнить массив длиной n нулями и единицами, при этом данные значения чередуются, начиная с нуля.
const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Длина массива: "));

for (let i = 0; i < n; ++ i) {
    if (i % 2 === 0) {
        array.push(0);
    } else {
        array.push(1);
    }
}
console.log(array);