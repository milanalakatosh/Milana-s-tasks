//определить целое ли число
import readlineSync from "readline-sync";

let x = parseFloat(readlineSync.question("Введите число и нажмите <Enter> -> "));
console.log(x === Math.floor(x) ? "Введенное число является целым!" : "Введенное число не является целым!");
