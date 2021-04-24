//Известно, что x кг конфет стоит a рублей. 
//Определите, сколько стоит y кг этих конфет, а также сколько кг конфет можно купить на k рублей. 
//Все значения вводит пользователь.
const readlineSync = require("readline-sync");

let x = parseFloat(readlineSync.question("Сколько кг конфет?\nx = "));
let a = parseFloat(readlineSync.question("Сколько стоит x кг конфет?\n> "));
let y = parseFloat(readlineSync.question("Сколько кг конфет?\n> "));
let k = parseFloat(readlineSync.question("Сколько рублей?\n> "));

let x1 = a/x;//стоит 1 кг конфет

console.log(y + " кг конфет стоит " + y * x1 + " рублей, " + k / x1 + " кг конфет можно купить на " + k + " рублей.");
