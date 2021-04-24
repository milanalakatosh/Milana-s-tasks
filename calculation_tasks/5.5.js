const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Введите трехзначное число?\n> "));

let a = x%10;
let b = ((x-a)/10)%10;
let c = Math.floor(x/100);

console.log(a*100+b*10+c);
