//Дан массив a. Найдите количество положительных элементов массива.
import _ from 'lodash';

const a = [-2, 10, -5, -1, 2, 6];

const b = a.filter((n) => n > 0);
console.log(b.length);