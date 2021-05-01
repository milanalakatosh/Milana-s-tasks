//Создать массив длиной n, по примеру: [1, 2, 3, 4, 5, 4, 3, 2, 1]
const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Введите длину массива: "));

for (let i = 1; i < n/2 + 1; ++ i) {
    array.push(i);
}
for (let i = Math.floor(n/2); i > 0; -- i) {
    array.push(i);
}
console.log(array);