//Вычислите значения функции f(x)=x2−sin(x) на отрезке [a;b] с шагом h. Результат представить в виде таблицы.
const readlineSync = require ("readline-sync");

let a = parseInt(readlineSync.question("Введите a: "));
let b = parseInt(readlineSync.question("Введите b: "));
let h = parseInt(readlineSync.question("Введите шаг: "));

while (a <= b) {
    let x = a;
    let y = Math.pow(x, 2) - Math.sin(x);

    let space = "";
    let digAmount = x;
    let digLength = 0;
    while (digAmount >= 1) {
        digAmount /= 10;
        digLength += 1;
    }
    let spaceLength = 5 - digLength;
    for (let i = 1; i <= spaceLength; ++i) {
        space += " ";
    }
    
    console.log(x + space + y.toFixed(2));
    a += h;
}



