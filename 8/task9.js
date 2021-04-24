const readlineSync = require ("readline-sync");

let str = parseInt(readlineSync.question("Str?\n> "));
let result = false;
let strNew = " ";
//23+7=30
for (let x = 0; x < str.length; ++x) {
    if (str[x] === "=") {
        strNew = str.slice(x+1);
    }
}
console.log(strNew);