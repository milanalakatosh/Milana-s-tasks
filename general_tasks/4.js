//определяется угол aльфа под которым тело брошено по отношению к горизонту 
const readlineSync = require ("readline-sync");

let V = parseFloat(readlineSync.question("Введите начальную скорость:\n> "));
let T = parseFloat(readlineSync.question ("Время полета тела:\n> "));
let g = parseFloat(9.8);

let a = Math.asin((g*T)/(2*V)) * 180 / Math.PI;
console.log("Ugol = " + a);
