let x = 12.23;
x /= 10;
let amount = 1;

while (x>=1) {
    x /= 10;
    amount += 1;
}
console.log(amount);
