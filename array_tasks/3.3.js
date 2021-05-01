const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Введите длину массива: "));

for (let i = 1; i <= n; ++ i) {
    if (i % 2 !== 0) {
        array.push(i);
    }
}
console.log(array);