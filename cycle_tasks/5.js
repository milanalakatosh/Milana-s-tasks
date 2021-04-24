// а) пробег лыжника за второй, третий, ..., n-ный день тренировок; 
// б) какой суммарный путь он пробежал за m дней тренировок. 
// в) в какой день ему следует прекратить увеличивать пробег, если он не должен превышать k км?

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Сколько км лыжник пробежал в 1 день: "));
let y = parseInt(readlineSync.question("На сколько % лыжник увеличивал пробег от пробега предыдущего дня: "));
let n = parseInt(readlineSync.question("Сколько дней тренировок: "));
let k = parseInt(readlineSync.question("Максимальное количество км: "));

let kmNewDay = 1;
let nNewDay = 1;
let previousDay = x;
let totalPath = x;

for (let i = 1; i <= n; ++i) {
    if (i>=2) {
        kmNewDay = (y/100) * previousDay + previousDay;
        totalPath += kmNewDay;
        previousDay = kmNewDay;
        nNewDay += 1;
        console.log("На " + nNewDay + " день пробег лыжника составил " + kmNewDay.toFixed(2) + " км");
    }
}
console.log("Суммарный путь, который пробежал лыжник за  " + n + " дней тренировок, составляет " + totalPath + " км");

let kmNewD = 0;
let daysCount = 1;
let kmPreviousD = x;

while (kmNewD <= k) {
    kmNewD = (y/100) * kmPreviousD + kmPreviousD;
    kmPreviousD = kmNewD;
    daysCount += 1;
}
console.log("На " + daysCount + " день лыжнику следует прекратить увеличивать пробег, если он не должен превышать " + k + " км");
