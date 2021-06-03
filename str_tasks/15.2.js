// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
const readlineSync = require("readline-sync");

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");


let searchString = "";
let content = false;
let equal;

if (str1.length === str2.length) {
    equal = true;
} else if (str1.length > str2.length) {
    for (let i = 0; i < str2.length; ++i) {
        for (let j = 0; j < str1.length; ++j) {
            if (str2[i] === str1[j]) {
                searchString +=  str2[i];
                i += 1;
            } else searchString = "";
            if (searchString === str2) {
                content = true;
                break;
            } 
        }
    }
} else {
    for (let i = 0; i < str1.length; ++i) {
        for (let j = 0; j < str2.length; ++j) {
            if (str1[i] === str2[j]) {
                searchString +=  str1[i];
                break;
            } else searchString = "";
            if (searchString === str1) {
                content = true;
                break;
            }
        }
        if (content) break;
    }
}

console.log(equal ? "Строки по длине одинаковые"
    : content ?  "меньшая по длине строка содержится в большей"
    : "меньшая по длине строка не содержится в большей");