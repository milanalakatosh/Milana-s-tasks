//определить целое ли число
const readlineSync = require ("readline-sync");

let x = parseFloat(readlineSync.question("Введите число и нажмите <Enter> -> "));

if (x === Math.floor(x)) {
    console.log("Введенное число является целым!");
} else {
    console.log("Введенное число не является целым!");
}