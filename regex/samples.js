// // проверить соответствует ли строка регэкспу
// // вся строка
const s1 = "abc";
console.log(/^abc$/.test(s1));
console.log(/^a.c$/.test(s1));
console.log(/^a\dc$/.test(s1));

// // одно вхождение в строку
const s2 = "abc def ghi";
console.log(/e/.test(s2));
console.log(/d.f/.test(s2));

// // найти вхождение в строку
const s3 = "abc def ghi";
const result3 = /d.f/.exec(s3);
console.log(result3);
console.log(result3[0]);
console.log(result3.index);
console.log(result3.input);

// // найти несколько вхождений (флаг g)
const s4 = "abc def dbf";
console.log(s4.match(/d.f/g));

// найти несколько вхождений с индексами
// строку и регексп выносим в отдельные переменные
const s5 = "abc def dbf";
const regex = /d.f/g;
let result5;
// eslint-disable-next-line no-cond-assign
while (result5 = regex.exec(s5)) {
    console.log(result5);
    console.log(result5[0]);
    console.log(result5.index);
    console.log(result5.input);
}

// заменить первое вхождение
const s6 = "abc def dbf";
console.log(s6.replace(/d.f/, '---'));

// заменить все вхождения
const s7 = "abc def dbf";
console.log(s7.replace(/d.f/g, '---'));
