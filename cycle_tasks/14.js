//Вывести 3 случайных числа от 0 до 100 без повторений.
let a = Math.floor(Math.random()*101); 
let b = Math.floor(Math.random()*101);
let bCheck = false;
let c = Math.floor(Math.random()*101);
let cCheck = false;

console.log("1 число = " + a)

while (bCheck === false) {
    if (a === b) {
        b = Math.floor(Math.random()*101);
    } else {
        bCheck = true;
        console.log ("2 число = " + b);
    }
}
while (cCheck === false) {
    if (c === a || c === b) {
        c = Math.floor(Math.random()*101);
    } else {
        cCheck = true;
        console.log ("3 число = " + c);
    }
}
