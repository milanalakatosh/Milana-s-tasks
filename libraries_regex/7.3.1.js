//Дан массив a. Выведете сумму только нечётных неотрицательных элементов массива. 
//Нечётными элементами будем считать первый, третий, пятый и так далее по счёту. 
//Однако их индексы: 0, 2, 4 и так далее

import _ from 'lodash';

const a = [-2, 10, 5, 1, 2, 6];

/**
 * Возвращает новый массив элементы которого соответствуют предикату
 * @param {*} array 
 * @param {(element, index) => boolean} predicate 
 */
function filter(array, predicate) {
    const newArray = [];
    for (let i = 0; i < array.length; ++i) {
        if (predicate(array[i], i)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const filteredArray = a.filter((n,i) => i%2 === 0 && n > 0);
console.log(_.sum(filteredArray));
