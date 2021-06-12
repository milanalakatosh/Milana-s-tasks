// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
const readlineSync = require("readline-sync");

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");
let content = false;
let equal;

if (str1.length === str2.length) equal = true;
else if (str1.indexOf(str2) !== -1 || str2.indexOf(str1) !== -1) content = true;

console.log(equal ? "Строки по длине одинаковые"
    : content ? "меньшая по длине строка содержится в большей"
    : "меньшая по длине строка не содержится в большей");

 
