//Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");

if (str.slice(0,3) === "abc") str = str.replace("abc","www");
else str += "zzz";

console.log(str);