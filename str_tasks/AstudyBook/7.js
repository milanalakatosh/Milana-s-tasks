//Удалите лишние пробелы из строки. Пробелы лишние если они в начале или в конце строки, 
//а также если между словами больше одного пробела. 
//Считается, что строка состоит только из букв и пробелов.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");

while (str.includes("  ")) {
    str = str.replace("  "," ");
}
if (str[0] === " ") str = str.replace(str[0], "");
if (str[str.length-1] === " ") str = str. replace(str[str[str.length-1], ""]);
console.log(str);
