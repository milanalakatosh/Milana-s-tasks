//Дан круг с центром в (x, y) и радиусом r. Даны координаты точки (a,b). Узнать лежит точка в круге или нет?
//Дан прямоугольник (x1, y1 - левый нижний угол, x2, y2 - правый нижний угол). x1, x2, y1, y2 - целые числа. Найдите, сколько точек с целочисленными координатами попадают внутрь прямоугольника.
//Дан прямоугольник (x1, y1 - левый нижний угол, x2, y2 - правый нижний угол). x1, x2, y1, y2 - могут быть дробными. Найдите, сколько точек с целочисленными координатами попадают внутрь прямоугольника.
//Найдите, сколько точек с целочисленными координатами попадает в круг радиуса r  с центром в точке (x,y).
const readlineSync = require ("readline-sync");

let x = parseFloat(readlineSync.question("Введите координаты точки x: "));
let y = parseFloat(readlineSync.question("Введите координаты точки y: "));
let r = parseFloat(readlineSync.question("Введите радиус окружности: "));
let a = parseFloat(readlineSync.question("Введите координаты точки a: "));
let b = parseFloat(readlineSync.question("Введите координаты точки b: "));
//c (гипотенуза) = Math.sqrt(a*a+b*b);
let cathetusA = a - x;
let cathetusB = b - y
let hypotenuse = Math.sqrt(Math.pow(cathetusA,2)+Math.pow(cathetusB, 2));

console.log(hypotenuse <= r ? "Точка лежит в круге" : "Точка не лежит в круге");

let countOfdots = 0;

for (let i = Math.floor(x-r); i < Math.ceil(x+r); ++ i) {
    for (let j = Math.floor(y-r); j < Math.ceil(y+r); ++j) { 
        if (i*i+j*j<r*r) countOfdots += 1;
    }   
}
console.log("В круг попадает " + countOfdots + " точек с целочисленными координатами");


