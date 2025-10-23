const increaseSalary = (salaries, percent) => {
    if(!(salaries instanceof Array) || !(typeof percent === "number"))
        throw new Error('Give valid parameters');
    else
        for(let i = 0; i < salaries.length; i++)
        {
            salaries[i] = salaries[i] * (1 + percent/100);
            console.log(salaries[i]);
        }
}

increaseSalary([2000, 10000, 5000, 2500], 5);
increaseSalary("salarii", 5);
increaseSalary([200, 100, 0], "procent");