const object = {
    nume: "Ana",
    varsta: 12
}

function deepCopy(obj){
    return {...obj};
}

const obj2 = deepCopy(object);
obj2.nume = "Andrei";
console.log(obj2, object);