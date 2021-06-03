//Дан текст. Сформировать строку из символов, расположенных между первой и второй запятыми данного текста. 
//Решить через двукратное применение indexOf.
const readlineSync = require("readline-sync");

let text = readlineSync.question("Введите текст:\n> ");
let comma = 0;
let sliceFrom;
let sliceTo;

for (let i = 0; i < text.length; ++i) {
    if (comma <= 2 && text[i] === ",") {
        comma += 1;
        if (comma === 1) sliceFrom = i+1;
        else if (comma === 2) sliceTo = i;
    }
    if (comma === 2) break;
}
let string = text.slice(sliceFrom, sliceTo);
console.log(string);
