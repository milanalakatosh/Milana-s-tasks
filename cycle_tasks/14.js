//Вывести 3 случайных числа от 0 до 100 без повторений.
function generateUniqueRandomNumbers(n) {
    const randomNumbers = [];
    while(randomNumbers.length < n) {
        const x = Math.floor(Math.random()*101); 
        if (!randomNumbers.includes(x)) {
            randomNumbers.push(x);
        }
    }
    return randomNumbers;
}


for (const number of generateUniqueRandomNumbers(3)) console.log(number);


