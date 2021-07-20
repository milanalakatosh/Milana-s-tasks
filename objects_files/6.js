//Пользователь вводит строку. Нужно определить какие буквы русского алфавита в ней отсутствуют. 
//Подсказка: изначально нужно задать объект, ключами которого будут все буквы русского алфавита, 
//а значениями - true. Затем идя по введённой строке нужно удалять из объекта встречающиеся буквы. 
//Те буквы, которые в конце концов останутся в объекте и будут искомыми буквами.
import * as readlileSync from "readline-sync";

 const abc = {
     а: true, б: true, в: true, г: true, д: true, е: true, ё: true, ж: true, з: true, и: true, й: true,
     к: true, л: true, м: true, н: true, о: true, п: true, р: true, с: true, т: true, у: true, ф: true, 
     х: true, ц: true, ч: true, ш: true, щ: true, ъ: true, ы: true, ь: true, э: true, ю: true, я: true,
 };

 const str = readlileSync.question("Введите строку\n> ");
 for (let letter of str) {
    if (letter in abc) {
        delete abc[letter];
    }
} 
console.log(abc);
 
