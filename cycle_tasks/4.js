const readlineSync = require("readline-sync");

let a = parseInt(readlineSync.question("Введите a: "));
let n = parseInt(readlineSync.question("Введите n: "));

let p = 0;
let previous = 1;

 for (let i = 1; i <= n; ++i) {
    p = Math.pow(a+i,2)*previous;
    previous = p;
 }
 console.log(p);