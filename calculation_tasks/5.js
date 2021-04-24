//Дано трехзначное число. Переставьте первую и последнюю цифры. 
//(было x=123, стало x=321)
const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Введите трехзначное число?\n> "));

let a = x%10;
let b = ((x-a)/10)%10;
let c = Math.floor(x/100);

console.log(a+""+b+""+c);
