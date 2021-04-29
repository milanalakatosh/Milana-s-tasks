// а) пробег лыжника за второй, третий, ..., n-ный день тренировок; 
// б) какой суммарный путь он пробежал за m дней тренировок. 
// в) в какой день ему следует прекратить увеличивать пробег, если он не должен превышать k км?

const readlineSync = require("readline-sync");

let x = parseInt(readlineSync.question("Сколько км лыжник пробежал в 1 день: "));
let y = parseInt(readlineSync.question("На сколько % лыжник увеличивал пробег от пробега предыдущего дня: "));
let n = parseInt(readlineSync.question("Сколько дней тренировок: "));
let k = parseInt(readlineSync.question("Максимальное количество км: "));

let distanceNewDay = 1;
let distancePreviousDay = x;
let countDay = 1;
let breakDay = 1;
let totalDistance = x;

while (true) {
    // if (countDay>n && distanceNewDay>k) {
    //     break;

    distanceNewDay = (y/100) * distancePreviousDay + distancePreviousDay;
    totalDistance += distanceNewDay;
    distancePreviousDay = distanceNewDay;
    countDay += 1;
    if (countDay <= n) {
        console.log("На " + countDay + " день пробег лыжника составил " + distanceNewDay.toFixed(2) + " км\n" + "Суммарный путь лыжника за " + n + " дней тренировок, составляет " + totalDistance.toFixed(2)  );
        }
    if (distanceNewDay <= k) {
    console.log(+ " км"+"\nНа "+breakDay+" день лыжнику следует прекратить увеличивать пробег, если он не должен превышать "+k+" км");
    