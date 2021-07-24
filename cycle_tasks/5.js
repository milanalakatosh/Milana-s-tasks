//в какой день ему следует прекратить увеличивать пробег, если он не должен превышать k км?

import readlineSync from "readline-sync";

const kmAmountFirstDay = parseInt(readlineSync.question("Сколько км лыжник пробежал в 1 день: "));
const percentOfIncreasing = 
    parseInt(readlineSync.question("На сколько % лыжник увеличивал пробег от пробега предыдущего дня: "));
let trainingDaysAmount = parseInt(readlineSync.question("Сколько дней тренировок: "));
let maxKmAmount = parseInt(readlineSync.question("Максимальное количество км: "));

let kmNewDay = 0;
let daysCount = 1;
let kmPreviousDay = kmAmountFirstDay;
let totalDistance = kmAmountFirstDay;
let breakDay = 1;

countKmOfNewDay()

function countKmOfNewDay() {
    while (true) {
        daysCount += 1;
        kmNewDay = (percentOfIncreasing/100) * kmPreviousDay + kmPreviousDay;
        kmPreviousDay = kmNewDay;
        
        if (daysCount <= trainingDaysAmount) {
            totalDistance += kmNewDay;
            console.log("На " + daysCount + " день пробег лыжника составил " + kmNewDay.toFixed(2) 
            + " км")
        }
        if (kmNewDay <= maxKmAmount) {
            breakDay += 1;
        }
    
        if (kmNewDay > maxKmAmount && daysCount > trainingDaysAmount) {
            break;
        }
    }
}

console.log("Суммарный путь лыжника за " + trainingDaysAmount + " дней тренировок, составляет " + 
    totalDistance.toFixed(2) + "\nНа " + breakDay + 
    " день лыжнику следует прекратить увеличивать пробег, если он не должен превышать " + 
    maxKmAmount + " км");