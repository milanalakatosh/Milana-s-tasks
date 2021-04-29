//Пользователь вводит ненулевые числа до тех пор пока не введет ноль. Найдите сумму этих чисел.
const readlineSync = require ("readline-sync");

let sum = 0;
let x = 1;

while (x !== 0) {
    x = parseInt(readlineSync.question("Введите числo: "));
    sum += x;
}
console.log(sum);

