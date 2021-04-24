//Вывести 3 случайных числа от 0 до 100. Используйте функцию Math.random(), которая случайно выдаёт число в отрезке 0 
//(включительно) до 1 (исключительно). 
//То есть выражение Math.floor(Math.random()*101) выдаст случайное число от 0 до 100.
let a = Math.floor(Math.random()*101);
let b = Math.floor(Math.random()*101);
let c = Math.floor(Math.random()*101);

console.log(a, b, c);