//1. Дана строка 'aa aba abba abbba abbbba abbbbba'. 
//Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их. 
{
    const str = "aa aba abba abbba abbbba abbbbba";
    const regex = /\bab{2,4}a\b/g;
    console.log("1. " + str.match(regex));
}
//2. Дана строка 'aa aba abba abbba abbbba abbbbba'. 
//Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно).
{
    const str = "aa aba abba abbba abbbba abbbbba";
    const regex = /\bab{1,3}a\b/g;
    console.log("2. " + str.match(regex));
}
//3. Дана строка 'aa aba abba abbba abbbba abbbbba'. 
//Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно).
{
    const str = "aa aba abba abbba abbbba abbbbba";
    const regex = /\bab{4,}a\b/g;
    console.log("3. " + str.match(regex));
}
//4. Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
{
    const str = "a1a a2a a3a a4a a5a aba aca";
    const regex = /\ba\da\b/g;
    console.log("4. " + str.match(regex));
}
//5.Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
{
    const str = "a1a a22a a333a a4444a a55555a aba aca";
    const regex = /\ba\d+a\b/g;
    console.log("5. " + str.match(regex));
}
//6.Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa'
{
    const str = "aa a1a a22a a333a a4444a a55555a aba aca";
    const regex = /\ba\d*a\b/g;
    console.log("6. " + str.match(regex));
}
//7.Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
{
    const str = "avb a1b a2b a3b a4b a5b abb acb";
    const regex = /\ba\Db\b/g;
    console.log("7. " + str.match(regex));
}
//8.Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
{
    const str = "ave a#b a2b a$b a4b a5b a-b a_b acb anb";
    const regex = /\ba[\W_]b\b/g;
    console.log("8. " + str.match(regex));
}
{
    const str = "ave a#b a2b a$b a4b a5b a-b a_b acb anb";
    const regex = /\ba[^a-z\d]b\b/g;
    console.log("8.1. " + str.match(regex));
}
//9.Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. Напишите регулярку, которая заменит все пробелы на '!'.
{
    const str = "ave a#a a2a a$a a4a a5a a-a aca";
    const regex = /\s/g;
    console.log("9. " + str.replace(regex, `!`));
}
//10.Дана строка 'aba aea aca aza axa'. Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных.
{
    const str = "aba aea aca aza axa";
    const regex = /\ba[bex]a\b/g;
    console.log("10. " + str.match(regex));
}
//11 Дана строка 'aba aea aca aza axa a.a a+a a*a'. Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных.
{
    const str = "aba aea aca aza axa a.a a+a a*a";
    const regex = /\ba[b.+*]a\b/g;
    console.log("11. " + str.match(regex));
}
//12.Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми. 
{
    const str = "aba a6a aca aza axa a3a a+a a7a";
    const regex = /\ba[3-7]a\b/g;
    console.log("12. " + str.match(regex));
}
//13.Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до g.
{
    const str = "aba aea aca aza axa a.a a+a a*a aaa aga";
    const regex = /\ba[a-g]a\b/gi;
    console.log("13. " + str.match(regex));
}
//16. Дана строка 'aba aea aca aza axa a-a a#a'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - не 'e' и не 'x'
{
    const str = "aba aea aca aza axa a-a a#a";
    const regex = /\ba[^ex]a\b/gi;
    console.log("16. " + str.match(regex));
}
//17.Дана строка 'wйw wяw wёw wqw'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'w', а между ними - буква кириллицы.
{
    const str = "wйw wяw wёw wqw";
    const regex = /\bw\p{sc=Cyrillic}w\b/gui;
    console.log("17. " + str.match(regex));
}
{
    const str = "wйw wяw wёw wqw";
    const regex = /w[^\p{sc=Cyrillic} ]w/gui;
    console.log("17.1. " + str.match(regex));
}
//22.Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'. Показать решение.
{
    const str = "aaa aaa aaa";
    const regex = /^aaa/g;
    console.log("22. " + str.replace(regex, "!"));
}
//23.Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'. Показать решение.
{
    const str = "aaa aaa aaa";
    const regex = /aaa$/g;
    console.log("23. " + str.replace(regex, "!"));
}
//24.Дана строка 'aeeea aeea aea axa axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз.
{
    const str = "aeeea aeea aea axa axxa axxxa";
    const regex = /\ba(e+|x+)a\b/g;
    console.log("24. " + str.match(regex));
}
{
    const str = "aeeea aeea aea axa axxa axxxa";
    const regex = "a+e";
    const regex1 = new RegExp("\\ba(e+|x+)a\\b", "g");
    console.log("24.1 " + str.match(regex1));
}
