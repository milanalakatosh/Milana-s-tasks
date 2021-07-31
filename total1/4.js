//Уроки по математике проводятся через день. Если урок попадает на воскресенье, 
//то переносится на понедельник. Пользователь вводит количество дней в месяце, 
//первый день недели месяца и дату первого урока. Сгенерируйте расписание из дат на месяц.
import readlineSync from "readline-sync";

const amountOfDaysInMonth = parseInt(readlineSync.question("Введите количество дней в месяце?\n> "));
const firstDayWeek = readlineSync.question("Введите первый день недели месяца ?\n> ");
const dateOfFirstLesson = parseInt(readlineSync.question("Введите дату первого урока?\n> "));

const scheduleOfMathForMonth = [];
let sunday = 1;
if (firstDayWeek === "понедельник") sunday += 6;
if (firstDayWeek === "вторник") sunday += 5;
if (firstDayWeek === "среда") sunday += 4;
if (firstDayWeek === "четверг") sunday += 3;
if (firstDayWeek === "пятница") sunday += 2  ;
if (firstDayWeek === "суббота") sunday += 1;

console.log(sunday);
for (let i = dateOfFirstLesson; i <= amountOfDaysInMonth; i++) {
    if (i !== sunday && i !== sunday+7 && i !== sunday+14 && i !== sunday+21 && i !== sunday+28) {
        scheduleOfMathForMonth.push(i);
        i++;
    }
}
console.log(scheduleOfMathForMonth);

