//Посчитать количество счастливых автобусных билетов (сумма первых трёх цифр равна сумме последних трёх)
let x = 0;
let n = 0;

while (x < 1000000) {
    let x1 = x % 10;
    let x2 = ((x - x1) / 10) % 10;
    let x3 = Math.floor((x / 100) % 10);
    let y1 = Math.floor((x / 1000) % 10);
    let y2 = Math.floor(((x - y1 * 1000) / 10000) % 10);
    let y3 = Math.floor(x / 100000);
    let sumX = x1 + x2 + x3;
    let sumY = y1 + y2 + y3;
    if (sumX === sumY) {
        n += 1;
    }
    x += 1;
}
console.log(n + " счастливых автобусных билетов.")

