//Даны два массива. Сформировать третий массив, состоящий из тех элементов, которые: 
//а) присутствуют в обоих массивах; б) присутствуют только в одном из массивов.

const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let b = JSON.parse(readlineSync.question("Введите массив:\n> "));
let c = [];

for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < b.length; ++j) {
        if (a[i] === b[j] && !c.includes(a[i])) c.push(a[i]);
    }
}
console.log(c);

let d = [];
for (let i = 0; i < a.length; ++i) {
    if (!b.includes(a[i])) d.push(a[i]);
}
for (let i = 0; i < b.length; ++i) {
    if (!a.includes(b[i])) d.push(b[i]);
}
console.log(d);