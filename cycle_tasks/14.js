//Вывести 3 случайных числа от 0 до 100 без повторений.
const firstNumber = Math.floor(Math.random()*101); 
console.log("1 число = " + firstNumber)

const secondNumber = Math.floor(Math.random()*101);
const thirdNumber = Math.floor(Math.random()*101);

let differentNumbers = false;

checkNumber(secondNumber, 2)
checkNumber(thirdNumber, 3)


function checkNumber(num, ordinalNumber) {
    while (differentNumbers === false) {
        if (firstNumber===secondNumber || firstNumber===thirdNumber || secondNumber===thirdNumber) {
            num = Math.floor(Math.random()*101);
        } else {
            differentNumbers = true;
        }
    }
    console.log (ordinalNumber + " число = " + num);
}
    