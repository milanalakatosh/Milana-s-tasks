//Вывести 3 случайных числа от 0 до 100 без повторений.


const randomNumbers = [];


function generateUniqueRandomNumbers(n) {
    while(randomNumbers.length < n) {
        const x = Math.floor(Math.random()*101); 
        if (!randomNumbers.includes(x)) {
            randomNumbers.push(x);
        }
    }
    return randomNumbers;
}
generateUniqueRandomNumbers(3);

for (const number of randomNumbers) console.log(number);


