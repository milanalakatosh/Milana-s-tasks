//Вывести на экран числа 100, 96, 92, ... до последнего положительного включительно.

let result = 100;
let x = -4;

while (result >= 0) {
    console.log(result);
    result += x;
}