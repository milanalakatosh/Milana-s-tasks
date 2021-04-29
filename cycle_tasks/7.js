//Найдите трехзначные числа, равные сумме кубов своих цифр.
for (let i = 100; i < 1000; ++i) {
    let dig1 = i % 10;
    let dig1Cube = Math.pow(dig1, 3);
    let dig2Cube = Math.pow(((i-dig1)/10)%10, 3);
    let dig3Cube = Math.pow(Math.floor((i/100)%10), 3);
    let sumCube = dig1Cube + dig2Cube + dig3Cube;
    if (i === sumCube) {
        console.log(i);
    }
}

