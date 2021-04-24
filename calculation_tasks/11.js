//Даны числа h и m, где h - количество часов, m - количество минут некоторого момента времени. 
//Найдите угол между часовой и минутной стрелками в этот момент времени.
const readlineSync = require("readline-sync");

let h = parseInt(readlineSync.question("Введите количество часов: "));
let m = parseInt(readlineSync.question("Введите количество минут: "));

let totalDegree = 0;
let hDegree = 360 / (60 * 12);
let mDegree = 360 / 60;

if (h > 12) {
    h -= 12;
}

let degree1 = (h * 60 + m) * hDegree;
let degree2 = m * mDegree;

if (degree1 > degree2) {
    totalDegree= degree1 - degree2;
} else if (degree2 > degree1) {
    totalDegree= degree2 - degree1;
}
console.log("Угол между часовой и минутной стрелками в этот момент времени составляет " + totalDegree);