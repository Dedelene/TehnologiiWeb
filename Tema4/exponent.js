function exponent(base){
    const cache =[1];
    const exp = (puterea) => {
        if(puterea < cache.length){
            console.log("Found " + puterea);
            return cache[puterea];
        }
        else {
            console.log("Calculated " + puterea);
            cache[puterea] = base * exp(puterea - 1);
            return cache[puterea];
        }
    }
    return exp;
}

const exp = exponent(2);
console.log(exp(0));
console.log(exp(1));
console.log(exp(5));
console.log(exp(3));