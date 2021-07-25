// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
const readlineSync = require("readline-sync");

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");

function checkStrings() {
    checkEquality(str1, str2)
    if (!checkEquality(str1, str2)) {
        checkStringsLength(str1, str2)
    }

}

function checkContensOfStrings(x, y) {
    let content = false;
    let searchString = "";
    for (let i = 0; i < y.length; ++i) {
        for (let j = 0; j < x.length; ++j) {
            if (y[i] === x[j]) {
                searchString += y[i];
            }
            if (searchString === y) {
                content = true;
                break;
            }
        }
    }
    if (content) console.log("меньшая по длине строка содержится в большей");
    else console.log("меньшая по длине строка содержится в большей");
}

function checkStringsLength(x, y) {
    if (x.length > y.length) return function checkContensOfStrings(x, y)
    else return function checkContensOfStrings(y, x)
}

function checkEquality(x, y) {
    if (x.length === y.length) {
        console.log("Строки по длине одинаковые");
    } else {
        return false;
    }
}


