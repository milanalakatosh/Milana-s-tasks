import _ from 'lodash';

//Дан массив a. Выведете первый, третий элемент и длину массива.
const a = [5, 2, -1, 9];

const firstElement = _.head(a);//const firstElement = _.first(a);
const thirdElement = _.find(a[2], a);// не уверена в параметрах
const length = _.size(a);
console.log(firstElement, thirdElement, length);