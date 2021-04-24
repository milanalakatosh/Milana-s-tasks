//Перевод числа из метров в километры
const readlineSync = require ("readline-sync");

let m = parseFloat(readlineSync.question("Введите количество метров: "));
let km = m / 1000;
let m1= m%10;
let m2= ((m-m1) / 10) % 10;
let f = Math.floor(m);
let km1= m%10;
let km2= ((km-km1) / 10) % 10;
let f2 = Math.floor(km);

let x = "";
if ((m === 1) || (m1 === 1 && m2 !==1)) {
    x = "метр";
} else if ((m1 > 1 && m1 < 5 && m2 !== 1) || (m !== f)) {
    x = "метра";
} else {
    x = "метров";
}

let y = "";
if ((km ===1) || (km1 === 1 && km2 !==1)) {
    y = "километр";
} else if ((km1 > 1 && km1 < 5 && km2 !== 1) || (km !== f2)) {
    y = "километра";
} else {
    y = "километров";
}

console.log(m + " " + x + " будет " + km + " " + y);
