//Найдите площадь, периметр и гипотенузу треугольника.
const readlineSync = require("readline-sync");

let a = parseFloat(readlineSync.question("Введите 1 катет прямоугольного треугольника\n> "));
let b = parseFloat(readlineSync.question("Введите 2 катет прямоугольного треугольника\n> "));

let c = Math.sqrt((a*a) + (b*b));
let p = a+b+c;
let s = (a*b)/2;

console.log("Площадь треугольника = " + s + ", периметр треуголника = " + p + ", гипотенуза = " + c);

