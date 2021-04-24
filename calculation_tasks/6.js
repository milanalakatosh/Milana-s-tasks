//Даны два трехзначных числа. 
//Получите новое число присоединением второго числа справа к первому без последних цифр у каждого. 
//Строками и циклами пользоваться нельзя! Например, 123 и 456 Ответ: 1245.
const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Введите трехзначное число?\n> "));
let y = parseInt(readlineSync.question("Введите трехзначное число?\n> "));

let x3 = x%10;
let x2 = ((x-x3)/10)%10;
let x1 = Math.floor(x/100);

let y3 = y%10;
let y2 = ((y-y3)/10)%10;
let y1 = Math.floor(y/100);

console.log(x1+""+x2+""+y1+""+y2+"");
