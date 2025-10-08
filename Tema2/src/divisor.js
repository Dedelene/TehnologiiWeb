function checkdivisor(n, divisor) {
    if(n % divisor)
        return false;
    else
        return true;
}

console.log(checkdivisor(50, 25));
console.log(checkdivisor(5, 3));