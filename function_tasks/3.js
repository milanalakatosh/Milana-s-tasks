// 1. Напишите функцию find, которая ищет одно из значений объекта по заданному критерию.
// predicate - это функция, которая принимает два параметра: значение и ключ, и возвращает true или false.
// По своему назначению эта функция похожа на встроенный метод массива find (Array.prototype.find),
// но она предназначена для поиска в объектах
// const obj = { a: 1, b: 2, c: 3 };
// const result1 = find(obj, (value) => value > 2);
function transform(array, callback) {
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i]) // calls the callback function passed to transform
      array[i] = result // assign back to array, transforming its value
    }
  }
const bets = [1, 5, 20]
transform(bets, x => x * 3)
console.log(bets) // [3, 15, 60]

const predicate = (value, key) => key === 'b';
const obj = { a: 1, b: 2, c: 3 };
function find (obj, predicate) {
    predicate(obj.value, obj.key);
}
console.log(find (obj, predicate));
// работает таким образом
const obj1 = { a: 1, b: 2, c: 3 };
//find(obj1, (value, key) => key === 'b'); // возвратит 2
// find(obj1, (value) => value > 2); // возвратит 3
// find(obj1, (value) => value > 100); // возвратит undefined
//console.log(find(obj1, (value, key) => key === 'b'));
// 2. Напишите функцию findPositiveValue, которая должна найти первое положительное значение в объекте
// Используйте ранее написанную функцию find
const findPositiveValue = (obj) => obj.value > 1;
const obj2 = { a: -500, b: -1, c: -3, d: 3 };

// работает таким образом
//console.log(findPositiveValue(obj2)); // возвратит 1
// findPositiveValue({ a: -500, b: -1, c: -3 }); // возвратит undefined
