const readlineSync = require("readline-sync");

let newStr = "";
let n = parseInt(readlineSync.question("Words count (n)?\n> "));
//n=3

for (let i = 1; i <= n; ++i) {
    let x = readlineSync.question(i + " word?\n> ");
    if (i !== n) {
        newStr += x + ", ";
    } else {
        newStr += x;
    }
}
console.log(newStr);