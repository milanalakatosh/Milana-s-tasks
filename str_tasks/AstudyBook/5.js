//Пользователь вводит строку str, индекс начала куска строки p и длину l. 
//Выведете эту строку, вырезав из неё кусок длинной l начиная с индекса p.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let p = parseInt(readlineSync.question("индекс начала куска строки?\n> "));
let l = parseInt(readlineSync.question("длина?\n> "));

let cuttingPart = str.slice(p, p+l);
console.log(str.replace(cuttingPart, ""));