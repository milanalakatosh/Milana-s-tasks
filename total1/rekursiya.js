function fib(n) { 
    return n < 3 ? 1 : fib(n-2) + (n-1);
}
console.log(fib(6));