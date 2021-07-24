//Дан массив a. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.
import _ from 'lodash';
const a = [7, 2, 3, 0];

const max = _.max(a);
const indexMax = a.indexOf(max);
const min = _.min(a);
const indexMin = a.indexOf(min);
a[indexMax] = min;
a[indexMin] = max;
console.log(a);