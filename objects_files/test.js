
const chalk = require("chalk");
console.log("Этот текст обычный, " + chalk.red("а этот текст будет красным"));

let a = "abcdefghejkelm";
let s = "e";
let index = -5;
let fromIndex = 0;
let array = [];
while (index !== -1) {
    index = a.toLowerCase().indexOf(s, fromIndex);
    
    if (index !== -1) {
        array.push(index);
        fromIndex = index + 1;
    } else break;
}
// a = a.slice(0,2) + chalk.red(a.slice(2, 3)) + a.slice(3);
// a = a.slice(0,4) + chalk.red(a.slice(4, 5)) + a.slice(5);
// a[0] = chalk.red(a[0]);
console.log(array);