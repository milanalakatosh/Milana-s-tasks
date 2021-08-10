function fact(n) {
    return n < 2 ? n : n * fact(n-1);
}
console.log(fact(5));