//Дан массив a. Сформируйте новый массив b, к-ый будет состоять только из полож чисел массива a 
import _ from 'lodash';

const a = [-2, 10, -5, -1, 2, 6];

const b = a.filter((n) => n > 0);
console.log(b);