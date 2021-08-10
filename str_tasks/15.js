// Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// через includes
// через indexOf
// через цикл без помощи includes и indexOf
import readlineSync from "readline-sync";

let str1 = readlineSync.question("Введите слово:\n> ");
let str2 = readlineSync.question("Введите слово:\n> ");
let content;
let equal;

if (str1.length === str2.length) equal = true;
else if (str1.length > str2.length)  content = str1.includes(str2);
else if (str2.length > str1.length) content = str2.includes(str1);

console.log(equal ? "Строки по длине одинаковые"
    : content ? "меньшая по длине строка содержится в большей" 
    : "меньшая по длине строка не содержится в большей");
   