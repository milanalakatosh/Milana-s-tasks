const readlineSync = require ("readline-sync");

let str = readlineSync.question("Sentence?\n> ");
let w = str.split(" ");
let max = w[0];
for (let i = 0; i < w.length; ++i) {
    if (w[i].length > w[0].length) {
        max = w[i];
    }
}
console.log(max);
