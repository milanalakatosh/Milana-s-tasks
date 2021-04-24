const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Введите трехзначное число?\n> "));
let y = parseInt(readlineSync.question("Введите трехзначное число?\n> "));

let x3 = x%10;
let x2 = ((x-x3)/10)%10;
let x1 = Math.floor(x/100);

let y3 = y%10;
let y2 = ((y-y3)/10)%10;
let y1 = Math.floor(y/100);

console.log(x1*1000+x2*100+y1*10+y2);