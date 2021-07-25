//Дана дата из трех чисел (день, месяц и год). 
//Вывести yes, если такая дата существует (например, 12 02 1999 - yes, 22 13 2001 - no).


function checkMonthExistence(x) {
    return x > 0 && x < 13;
}
checkMonthExistence(11)

if (checkMonthExistence()) console.log(1);
else console.log(2);


