const readlineSync = require ("readline-sync");

let str = readlineSync.question("A word?\n> ");
str = str.toLowerCase();
let strM = str.split("");
let strM2 = [];

for (let i = strM.length - 1; i >= 0; --i) {
    strM2.push(strM[i]);
}

let str2 = '';
str2 = strM2.join('');

if (str === str2) {
    str = true;
} else {
    str = false;
}

console.log(str);