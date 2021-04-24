//1+2+3=6

let n = 5;
let x = "";
let sum = 0;

for (let i = 1; i <= n; ++i) {
    if (i === 1) {
        x += i;
    } else {
        x += " + " + i; 
    }
    sum += i
    console.log(x + " = " + sum);
}
