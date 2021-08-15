//1+2+3=6
import readlineSync from "readline-sync";

const n = parseInt(readlineSync.question("Введите количество строк:\n> "));
let x = "";
let sum = 0;

for (let i = 1; i <= n; ++i) {
    x += i === 1 ? i : " + " + i; 
    sum += i;
    console.log(x + " = " + sum);
}
