// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
const readlineSync = require("readline-sync");

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");

let content = false;
let equal;
let longerStr;
let smallerStr;

if (str1.length === str2.length) {
    equal = true;
} else if (str1.length > str2.length) {
    longerStr = str1;
    smallerStr = str2;
} else {
    longerStr = str2;
    smallerStr = str1;
}
if (!equal) {
    let searchString = "";
    for (let i = 0; i < smallerStr.length; ++i) {
        for (let j = 0; j < longerStr.length; ++j) {
            if (smallerStr[i] === longerStr[j]) {
                searchString += smallerStr[i];
            }
            if (searchString === smallerStr) {
                content = true;
                break;
            }
        }
        if (content) break;
    }
}
console.log(equal ? "Строки по длине одинаковые"
    : content ? "меньшая по длине строка содержится в большей"
        : "меньшая по длине строка не содержится в большей");