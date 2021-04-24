const readlineSync = require("readline-sync");

let x = readlineSync.question("1 word?\n> ");
let y = readlineSync.question("2 word?\n> ");
let z = readlineSync.question("3 word?\n> ");
console.log(x + ", " + y + ", " + z);