//Перевод числа из метров в километры
import readlineSync from "readline-sync";

let m = parseFloat(readlineSync.question("Введите количество метров: "));
let km = m / 1000;
let m1= m%10;
let m2= ((m-m1) / 10) % 10;
let f = Math.floor(m);
let km1= m%10;
let km2= ((km-km1) / 10) % 10;
let f2 = Math.floor(km);

let mCase = ((m === 1) || (m1 === 1 && m2 !==1)) ? "метр" :
    ((m1 > 1 && m1 < 5 && m2 !== 1) || (m !== f)) ? "метра" : "метров";

let kmCase = ((km ===1) || (km1 === 1 && km2 !==1)) ? "километр" :
    ((km1 > 1 && km1 < 5 && km2 !== 1) || (km !== f2)) ? "километра" : "километров";

console.log(m + " " + mCase + " будет " + km + " " + kmCase);
