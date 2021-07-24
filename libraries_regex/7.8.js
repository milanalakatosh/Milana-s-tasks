//Дан массив a. Сформируйте новый массив b, в котором будут все элементы из массива a, 
//но не будет повторений. 

import _ from 'lodash';

const a = [1, 4, 10, 10, 4, 2, 10, 0];
// const b = [];
// b.push(a.filter((n) => (!b.includes(n))));
//const b = a.remove(a, function(n)) function((n) => b.includes(n));
const b = _.uniq(a); 

console.log(b);