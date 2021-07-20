//Дан массив a. Выведете минимальный и максимальный элементы массива.
import * as _ from 'lodash';

const a = [1, 16, 25, 4, -2];
const max = _.max(a);
const min = _.min(a);

console.log(min, max);