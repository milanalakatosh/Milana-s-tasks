// 1. Напишите функцию find, которая ищет одно из значений объекта по заданному критерию.
// predicate - это функция, которая принимает два параметра: значение и ключ, и возвращает true или false.
// // По своему назначению эта функция похожа на встроенный метод массива find (Array.prototype.find),
// // но она предназначена для поиска в объектах
function find (obj, predicate) {
    for (const item in obj) {
        if(predicate(obj[item], item)) {
            return obj[item];
        }
    }
}
// // работает таким образом
const obj1 = { a: 1, b: 2, c: 3 };
console.log(find(obj1, (value, key) => key === 'b')); // возвратит 2
// console.log( find(obj1, (value) => value > 2)); // возвратит 3
// console.log( find(obj1, (value) => value > 100)); // возвратит undefined

// 2. Напишите функцию findPositiveValue, которая должна найти первое положительное значение в объекте
// Используйте ранее написанную функцию find
function findPositiveValue(obj) {
    return find(obj, (value) => value > 0);
}
console.log("First Positive: " + findPositiveValue({ a: -1, b: 1, c: 10 }), 
    "First Positive: " + findPositiveValue({ a: -500, b: -1, c: -3 }));
//работает таким образом
findPositiveValue({ a: -1, b: 1, c: 10 }); // возвратит 1
findPositiveValue({ a: -500, b: -1, c: -3 }); // возвратит undefined

// 3. Напишите функцию findNot, которая должна найти первое значение объекта несоответствующее критерию.
// Используйте ранее написанную функцию find
function findNot(obj, predicate) {
    if (predicate() === true) predicate() === false;  
    return find(obj, predicate);
}
// работает таким образом
const obj3 = { a: 1, b: 2, c: 3 };
console.log("findNot: " + findNot(obj3, (value, key) => key === 'a' || key === 'b')); // возвратит 3
console.log(findNot(obj3, (value) => value < 2)); // возвратит 2

// 4. Напишите функцию, которая читает из файла с переданным имененм объект и находит в нём первое значение соответствующее критерию
// Файл имеет формат JSON. Используйте ранее написанную функцию find.
import * as fs from 'fs';
import path from 'path';
import { dirName } from "../utils.js";
function findInFile(fileName, predicate) {
    const obj = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), fileName)));
    return find(obj, predicate);
}
console.log("findInFile: "+findInFile("object.json", (value, key) => value >= 10));

// // 5. Напишите функцию, которая читает из файла "numbers.json" объект и возвращает из него первое положительное значение
// // Подумайте какую из ранее написанных функций лучше использовать в реализации этой
function findPositiveInNumbersJSON(fileName) {
    const obj = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), fileName)));
    return findPositiveValue(obj);
}
console.log("findPositiveInNumbersJSON: "+findPositiveInNumbersJSON("numbers.json", (value, key) => value > 0));
// // 6. Напишите универсальную функцию поиска в переданном объекте, массиве или файле значения по критерию.
// // Первым параметром может быть массив, объект или строка означающая путь к файлу
// function findUniversal(obj, predicate) {
//     let x = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), obj)));
//     x.entries().forEach(element => {
//         if (predicate(element.value, element.key)) return element.value;
//     });
// }
// //console.log("Universal: " + findUniversal("numbers.json",  (value, key) => value < -2));
//     /* ваш код здесь */


// // 7. Напишите функцию, которая принимает предикат и возращает функцию, которая принимает объект и ищет в нём значение
// // по ранее заданному предикату (смотрите примеры для большей ясности).
// function makeFinder(predicate) {
//     for (const item in obj) {
//         if(predicate(obj[item], item)) return obj[item];
//     } 
// };

// // работает таким образом
// const findNegativeValue = makeFinder((value) => value < 0);
// console.log("findNegativeValue:"findNegativeValue({ a: 1, b: -50, c: 0 })); // вернёт -50

// const findWithKeysCD = makeFinder((value, key) => key === 'c' || key === 'd');
// //findWithKeysCD({a: 1, b: -50, c: 0}); // вернёт 0
// //findWithKeysCD({a: 1, b: -50, d: 40}); // вернёт 40

// // 8. Теперь реализуйте ранее созданную функцию findPositiveValue, но с помощью функции makeFinder

// // 9. Напишите функцию findLazy. Эта функция работает, как find, но не ищет значение сразу
// // вместо этого она возвращает функцию, которая в свою очередь ищет значение
// //function findLazy(obj, predicate) {
//     /* ваш код здесь */
// //};

// //const obj1 = { a: 1, b: 2, c: 3 };
// //const findValue = findLazy(obj1, (value, key) => value > 2);
// //findValue(); // вернёт// 3