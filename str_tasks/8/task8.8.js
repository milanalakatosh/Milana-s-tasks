const readlineSync = require("readline-sync");

let str = readlineSync.question("String?\n> ");
let array = str.split(" ");

for (let i = 0; i < array.length; ++i) {
    let a = array[i];
    if (a !== '') {
        a = a.replace(a[0], a[0].toUpperCase());
        array[i] = a;
    }
}
let b = array.join(' ');
console.log(b);




