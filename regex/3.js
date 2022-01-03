//1.Дана строка 'aaa@bbb eee7@kkk'. Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa. 
{
    const str = "aaa@bbb eee7@kkk";
    const regex = /([a-z\d]*)@([a-z\d]*)/gi;
    console.log("1. " + str.replace(regex, "$2@$1"));
}
//2.Дана строка вида 'a1b2c3'. Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом: 'a11b22c33' (то есть рядом с каждой цифрой напишет такую же).
{
    const str = "a12b2c3";
    const regex = /(\d)/gi;
    console.log("2. " + str.replace(regex, "$1$1"));
}
//3.С помощью метода test определите, что переданная строка является емэйлом. Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru.
{
    const str = "mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru, --    dcf@fgfg.ru, dff@sfef";
    const result = [];
    const regex = /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}$/gi;
    const mails = str.split(", ");
    for (const mail of mails) { // используй методы массива без цикла
        result.push(mail + " - " + regex.test(mail)); 
    }
    console.log("3. " + result.join("\n"));
}
{
    const str = "-   abc +";
    const str1 = "abc";
    const regex = /^abc$/gi;
    console.log("3.1. " + regex.exec(str));
}
//4Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива.
{
    const str = "mymail@mail.ru,mail@mail.ru sdf my.mail@mail.ru dssfsf, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, mail@yandex.ru, --    dcf@fgfg.ru, dff@sfef"; 
    const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;
    console.log("4. " + str.match(regex).join("\n"));
}
//5.С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com. 
{
    const str = "site.ru, site.com, sdx.dsd.sd, my-site.com, my-site-my.com, my-site-dff-dfd-df.com, dadsda ";
    const regex = /^\w+(-\w+){0,2}\.\w{2,}$/;
    const domains = str.split(", ");
    const result = domains.map((domain) => domain + " - " + regex.test(domain));
    console.log("5. " + result.join("\n"));
}
//6. С помощью test определите, что переданная строка является доменом. Примеры доменов: http://site.ru, http://site.com.
{
    const str = "site.ru, site.com, sdx.dsd.sd, http://site.ru, http://site.com, my-site.com, my-site-my.com, my-site-dff-dfd-df.com, dadsda ";
    const regex = /^http:\/\/\w+(-\w+){0,2}\.\w{2,}$/;
    const domains = str.split(", ");
    const result = domains.map((domain) => domain + " - " + regex.test(domain));
    console.log("6. " + result.join("\n"));
}
//7.С помощью test определите, что переданная строка является доменом вида http://site.ru. Протокол может быть как http, так и https
{
    const domen = "http://site.ru";
    const regex = /^https?:\/\/\w+(-\w+){0,2}\.\w{2,}$/;
    console.log("7. " + regex.test(domen));
}
//8. С помощью test определите, что переданная строка начинается с http или с https.
{
    const domen = "http://site.ru";
    const regex = /^https?/;//в фигурных скобках не сработало
    console.log("8. " + regex.test(domen));
}