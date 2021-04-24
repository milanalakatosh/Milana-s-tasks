const readlineSync = require("readline-sync");

let array = [];
let n = parseInt(readlineSync.question("Words count (n)?\n> "));
//n=3

for (let i = 1; i <= n; ++i) {
    let x = readlineSync.question(i + " word?\n> ");
    array.push(x);
}
console.log(array.join(", "));
