//Дана дата из трех чисел (день, месяц и год). 
//Вывести yes, если такая дата существует (например, 12 02 1999 - yes, 22 13 2001 - no).
import readlineSync from "readline-sync";

let day = parseInt(readlineSync.question("Введите день\n> "));
let month = parseInt(readlineSync.question("Введите месяц\n> "));
let year = parseInt(readlineSync.question("Введите год\n> "));

checkDataExistence()

function checkDataExistence() {
    checkMonthExistence()
    checkLeapYear()
    checkDayExistence()
    if (checkDayExistence() && checkMonthExistence(month)) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

function checkMonthExistence(x) {
    return x > 0 && x < 13;
}

function checkLeapYear() {
    if (checkMonthExistence(month)) {
        let leapYear = false;
        if (year % 400 === 0) {
            leapYear = true;
        } else if (year % 100 === 0) {
            leapYear = false;
        } else if (year % 4 === 0) {
            leapYear = true;
        }
        return leapYear;
    }
}

function checkDayExistence() {
    let dayExists = false;
    if (month % 2 === 0) {
        if (month === 2) {
            if (checkLeapYear()) {
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
    return dayExists;
}


