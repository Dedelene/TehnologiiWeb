const numbers = [10, 5, 9, 18, 20];
const divisor = 2;

function sumDivisor(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0).reduce((prev, curr) => prev + curr, 0);
}

console.log(sumDivisor(numbers, divisor));