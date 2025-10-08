function fibo(n) {
    if(n === 0 || n === 1)
        return 1;
    else 
        return fibo(n - 1) + fibo(n - 2);
}

if(process.argv.length < 3)
    console.log("enter a numb");
else
    console.log(fibo(parseInt(process.argv[2])));