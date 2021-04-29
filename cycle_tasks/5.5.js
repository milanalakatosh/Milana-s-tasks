//в какой день ему следует прекратить увеличивать пробег, если он не должен превышать k км?

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Сколько км лыжник пробежал в 1 день: "));
let y = parseInt(readlineSync.question("На сколько % лыжник увеличивал пробег от пробега предыдущего дня: "));
let n = parseInt(readlineSync.question("Сколько дней тренировок: "));
let k = parseInt(readlineSync.question("Максимальное количество км: "));

let kmNewDay = 0;
let daysCount = 1;
let kmPreviousDay = x;
let totalDistance = x;
let breakDay = 1;

while (true) {
    daysCount += 1;
    kmNewDay = (y/100) * kmPreviousDay + kmPreviousDay;
    kmPreviousDay = kmNewDay;
    
    if (daysCount <= n) {
        totalDistance += kmNewDay;
        console.log("На " + daysCount + " день пробег лыжника составил " + kmNewDay.toFixed(2) + " км")
    }
    if (kmNewDay <= k) {
        breakDay += 1;
    }

    if (kmNewDay > k && daysCount > n) {
        break;
    }
}
console.log("Суммарный путь лыжника за " + n + " дней тренировок, составляет " + totalDistance.toFixed(2) + "\nНа " + breakDay+ " день лыжнику следует прекратить увеличивать пробег, если он не должен превышать "+k+" км");