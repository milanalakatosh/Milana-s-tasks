//Пользователь вводит три числа - длины сторон треугольника. Найти площадь треугольника. 
//Сделать проверку на существование треугольника (например, 1, 2, 3 - такого треугольника не существует). 
const readlineSync = require("readline-sync");

let a = parseFloat(readlineSync.question("Введите длину 1?\n> "));
let b = parseFloat(readlineSync.question("Введите длину 2?\n> "));
let c = parseFloat(readlineSync.question("Введите длину 3?\n> "));

let p = (a + b + c) / 2;
let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

if (a + b > c && b + c > a && a + c > b) {
    console.log("треугольник существует");
    console.log("Площадь треугольника = " + S + " м2");
} else {
    console.log("треугольника не существует");
}
