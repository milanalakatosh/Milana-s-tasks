const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let input.value = '123ab';
let y = "";
for (const symbol of input.value) {
    if (numbers.includes(symbol)) {
        y += symbol;
    }
}
input.value = y;

// ...
console.log(input.value); // '123'