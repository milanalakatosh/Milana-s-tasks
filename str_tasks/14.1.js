//Дан текст. Сформировать строку из символов, расположенных между первой и второй запятыми данного текста. 
//Решить через двукратное применение indexOf.
const readlineSync = require("readline-sync");

let text = readlineSync.question("Введите текст:\n> ");

let a = text.indexOf(",");
a += 1;
let b = text.indexOf(",", a);
let string = text.slice(a, b);
console.log(string);
