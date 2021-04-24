//Дана дата из трех чисел (день, месяц и год). 
//Вывести yes, если такая дата существует (например, 12 02 1999 - yes, 22 13 2001 - no).
const readlineSync = require("readline-sync");

let day = parseInt(readlineSync.question("Введите день\n> "));
let month = parseInt(readlineSync.question("Введите месяц\n> "));
let year = parseInt(readlineSync.question("Введите год\n> "));

let monthExists = month > 0 && month < 13;
let dayExists = false;

if (monthExists) {
    let leapYear = false;
    if (year % 400 === 0) {
        leapYear = true;
    } else if (year % 100 === 0) {
        leapYear = false;
    } else if (year % 4 === 0) {
        leapYear = true;
    }

    if (month % 2 === 0) {
        if (m === 2) {
            if (leapYear) {
                dayExists = day >= 1 && day <= 29;
            } else {
                dayExists = day >= 1 && day <= 28;
            }
        } else {
            dayExists = day >= 1 && day <= 30;
        }
    } else {
        dayExists = day >= 0 && day <= 31;
    }
}

if (monthExists && dayExists) {
    console.log("yes");
} else {
    console.log("no");
}
