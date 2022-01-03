//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb 
//по шаблону: буква 'a', любой символ, буква 'b'.
const str1 = 'ahb acb aeb aeeb adcb axeb';
const regex1 = /a.b/g;
const result1 = str1.match(regex1);
console.log("1. " + result1);
//Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea 
//по шаблону: буква 'a', 2 любых символа, буква 'a'.
const str2 = 'aba aca aea abba adca abea';
const regex2 = /a..a/g;
console.log("2. " + str2.match(regex2));
//Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca
const str3 = 'aba aca aea abba adca abea';
const regex3 = /ab./g;
console.log("3. " + str3.match(regex3));
//Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba 
//по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
const str4 = "aa aba abba abbba abca abea";
const regex4 = /ab+a/g;
console.log("4. " + str4.match(regex4));
//Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba 
//по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
const str5 = "aa aba abba abbba abca abea";
const regex5 = /ab*a/g;
console.log("5. " + str5.match(regex5));
//Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba 
//по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
const str6 = "aa aba abba abbba abca abea";
const regex6 = /ab?a/g;
console.log("6. " + str6.match(regex6));
// Дана строка 'aa aba abba abbba abca abea'. 
//Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea.
const str7 = "aa aba abba abbba abca abea";
const regex7 = /a\S?[^ce\s]*a/g;
console.log("7. " + str7.match(regex7));//что тут не так??
//Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки 
//по шаблону: строка 'ab' повторяется 1 или более раз.
const str8 = "ab abab abab abababab abea ab ceabab";
const regex8 = /\b(ab)+\b/g;
console.log("8. " + str8.match(regex8));

{
    const str = "ab abab abab abababab abea ab ceabab";
    const regex = /\b(ab)+\b/g;
    console.log("8. " + str.match(regex));
}
//09. Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.
{
    const str = "a.a aba aea";
    const regex = /\ba\.a\b/g;
    console.log("9. " + str.match(regex));
}
// 10.Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
{
    const str = "2+3 223 2223";
    const regex = /\b2\+3\b/g;
    console.log("10. " + str.match(regex));
}
//11. Дана строка '23 2+3 2++3 2+++3 345 567'. 
//Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество).
{
    const str = "23 2+3 2++3 2+++3 345 567";
    const regex = /\b2\++3\b/g;
    console.log("11. " + str.match(regex));
}
//12.Дана строка '23 2+3 2++3 2+++3 445 677'. 
//Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные.
{
    const str = "23 2+3 2++3 2+++3 445 677";
    const regex = /\b2\+*3\b/g;
    console.log("12. " + str.match(regex));
}
// 13. Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. 
//Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.
{
    const str = "*+ *q+ *qq+ *qqq+ *qqq qqq+";
    const regex = /\*q+\+/g;//  почему при установлении границ слова выводится null
    console.log("13. " + str.match(regex));
}
//14. Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки 
//по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a).
const str14 = "aba accca azzza wwwwa a a";
const regex14 = /\ba[^a ]+a\b/g;
console.log("14. " + str14.replace(regex14, "!"));
const str14b = "aba accca azzza wwwwa a a";
const regex14b = /\ba([^a ]+)a\b/g;
console.log("14.b. " + str14b.replace(regex14b, "!$&!"));







      
