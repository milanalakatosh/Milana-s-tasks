//Даны целочисленные координаты 3 вершин прямоугольника, стороны к-го параллельны координатным осям (x1, y1, x2, y2, x3, y3). 
//Найдите координаты его четвертой вершины (после проверки введенных данных на правильность). 
//Если введённые данные неправильны, выведете “неправильно”.
const readlineSync = require("readline-sync");

let x1 = readlineSync.question("Введите x1?\n> ");
let y1 = readlineSync.question("Введите y1?\n> ");
let x2 = readlineSync.question("Введите x2?\n> ");
let y2 = readlineSync.question("Введите y2?\n> ");
let x3 = readlineSync.question("Введите x3?\n> ");
let y3 = readlineSync.question("Введите y3?\n> ");

let x4 = 0;
let y4 = 0;
let a = true;

if (x1===x2) {
    x4 = x3;
} else if (x1===x3) {
    x4 = x2;
} else if (x2===x3) {
    x4 = x1;
}

if (y1===y2) {
    y4 = y3;
} else if (y1===y3) {
    y4 = y2;
} else if (y2===y3) {
    y4 = y1;
} else {
    a = false;
    console.log("неправильно");
}
 
if (a === true) {
    console.log("координаты четвертой вершины: x4 = " + x4 + ", y4 = " + y4);
}

