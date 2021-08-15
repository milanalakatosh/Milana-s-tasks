//Дана дата из трех чисел (день, месяц и год). 
//Вывести yes, если такая дата существует (например, 12 02 1999 - yes, 22 13 2001 - no).
import readlineSync from "readline-sync";

const day = parseInt(readlineSync.question("Введите день\n> "));
const month = parseInt(readlineSync.question("Введите месяц\n> "));
const year = parseInt(readlineSync.question("Введите год\n> "));

checkDateExistence(day, month, year);

function checkDateExistence(day, month, year) {
    if (doesDayExist(day, month, year) && doesMonthExist(month)) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

function doesMonthExist(month) {
    return month > 0 && month < 13;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } 
    return false;
}

function doesDayExist(day, month, year) {
    if (month % 2 === 0) {
        if (month === 2) {
            if (isLeapYear(year)) {
                return day >= 1 && day <= 29;
            } else {
                return day >= 1 && day <= 28;
            }
        } else {
            return day >= 1 && day <= 30;
        }
    } else {
        return day >= 0 && day <= 31;
    }
}


