// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
import readlineSync from "readline-sync";

const str1 = readlineSync.question("Введите слово:\n> ");
const str2 = readlineSync.question("Введите слово:\n> ");

const { min, max, equal } = findMinAndMax(str1, str2);

console.log(equal ? "строки равны" : containsMinInMax(min, max) ? 
    "меньшая по длине строка содержится в большей" : "меньшая по длине строка не содержится в большей");

function containsMinInMax(min, max) {
    let contains = false;
    let searchString = "";
    for (let i = 0; i < min.length; ++i) {
        for (let j = 0; j < max.length; ++j) {
            if (min[i] === max[j]) {
                searchString += min[i];
            }
            if (searchString === min) {
                contains = true;
                break;
            }
        }
    }
    return contains;
}

function findMinAndMax(str1, str2) {
    return {
        min: str1.length > str2.length ? str2 : str1,
        max: str1.length > str2.length ? str1 : str2,
        equal: str1.length === str2.length
    };
}
