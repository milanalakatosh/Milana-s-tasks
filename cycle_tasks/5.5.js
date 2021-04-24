//в какой день ему следует прекратить увеличивать пробег, если он не должен превышать k км?

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Сколько км лыжник пробежал в 1 день: "));
let y = parseInt(readlineSync.question("На сколько % лыжник увеличивал пробег от пробега предыдущего дня: "));
let n = parseInt(readlineSync.question("Сколько дней тренировок: "));
let k = parseInt(readlineSync.question("Максимальное количество км: "));

let kmNewD = 0;
let daysCount = 0;
let kmPreviousD = x;

while (kmNewD <= k) {
    daysCount += 1;
    kmNewD = (y/100) * kmPreviousD + kmPreviousD;
    kmPreviousD = kmNewD;
}
console.log(daysCount);