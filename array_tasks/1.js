//Заполнить массив длиной n нулями, кроме первого и последнего элементов, которые должны быть равны единице.
const readlineSync = require("readline-sync");
let n = [];
let length = parseInt(readlineSync.question("Длина массива: "));

for (let i = 0; i < length; ++ i) {
    n.push(i === 0 || i === length - 1 ? 1 : 0);
}
console.log(n);
