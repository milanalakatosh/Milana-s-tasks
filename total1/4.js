//Уроки по математике проводятся через день. Если урок попадает на воскресенье, 
//то переносится на понедельник. Пользователь вводит количество дней в месяце, 
//первый день недели месяца и дату первого урока. Сгенерируйте расписание из дат на месяц.
import readlineSync from "readline-sync";

const amountOfDaysInMonth = parseInt(readlineSync.question("Введите количество дней в месяце?\n> "));
const firstDayWeek = readlineSync.question("Введите первый день недели месяца ?\n> ");
const dateOfFirstLesson = parseInt(readlineSync.question("Введите дату первого урока?\n> "));

const scheduleOfMathForMonth = [];
let dateOfSunday = getDateOfSunday(firstDayWeek);

function getDateOfSunday(firstDayWeek) {
    switch (firstDayWeek) {
        case "понедельник": return 7;
        case "вторник": return 6;
        case "среда": return 5;
        case "четверг": return 4;
        case "пятница": return 3;
        case "суббота": return 2;
        default: return 1;
    }
}

console.log(dateOfSunday);
for (let i = dateOfFirstLesson; i <= amountOfDaysInMonth; i++) {
    if (i !== dateOfSunday && i !== (dateOfSunday%7 === 0)) {
        scheduleOfMathForMonth.push(i);
        i++;
    }
}
console.log(scheduleOfMathForMonth);

