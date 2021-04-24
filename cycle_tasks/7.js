//Найдите трехзначные числа, равные сумме кубов своих цифр.

let x = 100;

while (x < 1000) {
    let dig1 = x % 10
    let dig1Cube = Math.pow(dig1, 3);
    let dig2Cube = Math.pow(((x-dig1)/10)%10, 3);
    let dig3Cube = Math.pow(Math.floor((x/100)%10), 3);
    let sumCube = dig1Cube + dig2Cube + dig3Cube;
    if (x === sumCube) {
        console.log(x);
    }
    x += 1;
}

