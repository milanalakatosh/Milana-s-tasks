function fib(n) {
    return n < 3 ? 1 : fib(n - 2) + fib(n - 1);
}

//Дано натуральное число n. Выведите все числа от 1 до n.

function printNumberOrder(n) {
    if (n>1) {
        printNumberOrder(n-1);
    }
    console.log(n);
}
printNumberOrder(7);
//Даны два целых числа A и В (каждое в отдельной строке). 
//Выведите все числа от A до B включительно:в порядке возрастания, если A<B,или в порядке убывания, если а>b

function printChainOfNumbers(a, b) {
    console.log(a);
    if (a !== b) {
        printChainOfNumbers(a < b ? a + 1 : a - 1, b);
    } 
}

