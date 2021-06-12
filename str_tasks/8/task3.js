const readlineSync = require("readline-sync");

let str = readlineSync.question("String?\n> ");
//one Two Three
let big = 0;
let small = 0;

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== " ") {
        let b = str[i];
        let c = str[i].toLowerCase();
        if (b !== c) {
            big += 1;
        } else {
            small += 1;
        }
    }
}
console.log('Big ' + big + "\n" + 'Small ' + small);