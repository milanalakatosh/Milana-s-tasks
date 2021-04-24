// Вычислить, не используя функцию pow, значения функции z(x,m) = xm sinm(xm), для значений аргументов:
const readlineSync = require("readline-sync");

let x = parseFloat(readlineSync.question("Vvedite x?\n> "));
let m = parseInt(readlineSync.question("Vvedite m?\n> "));
//x=2,m=3
let sin = Math.sin(x * m); //sin=6
let z = Math.pow(x, m) * Math.pow(sin, m);
console.log(z);