// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
import readlineSync from "readline-sync";

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");

function findMinString(str1, str2) {
    if (str1 > str2) {
        return {
            min: str2, max: str1,
        }, 
    } else if (str1 < str2) {
            return {
                min: str1, max: str2,
            } 
    } else {
            return "equal";
    }          
}
