const sampleArray = [10, 20, 30, 40, 50];

const reduce = (arr, suma) => {
    let result = 0;
    for(let elem of arr)
        result = suma(result, elem);
    return result;
}

console.log(reduce(sampleArray, (prev, x) => prev + x));