//Заполнить массив длиной n нулями, кроме первого и последнего элементов, которые должны быть равны единице.
const readlineSync = require("readline-sync");
let n = [];
let length = parseInt(readlineSync.question("Длина массива: "));

for (let i = 0; i < length; ++ i) {
    if (i === 0 || i === length - 1) {
        n.push(1);
    } else {
        n.push(0);
    }
}
console.log(n);
