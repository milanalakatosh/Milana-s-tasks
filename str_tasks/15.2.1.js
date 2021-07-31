// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
import readlineSync from "readline-sync";

const str1 = readlineSync.question("Введите слово:\n> ");
const str2 = readlineSync.question("Введите слово:\n> ");

function findContaininggsInStringsAndLog(min, max) {
    if (findMinAndMax() !== "equal") {
        let content = false;
        let searchString = "";
        for (let i = 0; i < min.length; ++i) {
            for (let j = 0; j < max.length; ++j) {
                if (min[i] === max[j]) {
                    searchString += min[i];
                }
                if (searchString === min) {
                    content = true;
                    break;
                }
            }
        }
        if (content) console.log("меньшая по длине строка содержится в большей");
        else console.log("меньшая по длине строка содержится в большей");
    } else console.log("строки равны");
}


function findMinAndMax(str1, str2) {
    let min;
    let max;
    if (str1 > str2) return { min: str2, max: str1 };
    else if (str1 < str2) return { min: str1, max: str2 };
    else return "equal";
}
