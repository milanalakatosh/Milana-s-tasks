//Дан массив a. Сформируйте новый массив b, который будет зеркальным отражением массива a 
//и выведете его. Не пользуйтесь методом reverse.
import _ from 'lodash';

const a = [1, 2, 3, 4, 5];

const b = _.reverse(a);
console.log(b);