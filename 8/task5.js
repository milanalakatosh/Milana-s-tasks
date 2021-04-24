const readlineSync = require ('readline-sync');

let str = readlineSync.question ('String?\n> ');
let p = readlineSync.question ('Index?\n> ');
let l = readlineSync.question ('Length?\n> ');
let m = parseInt(p) + parseInt(l);
let str1 = str.slice(0,p) + str.slice(m);
console.log(str1);

