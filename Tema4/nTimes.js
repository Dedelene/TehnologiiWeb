Number.prototype.times = function(functie) {
    for(let i = 0; i < this; i++)
        functie(i);
}

const three = 4;
three.times(() => console.log("Four!"));