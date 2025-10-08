let string = (arr) => {
    let str = "";
    arr.forEach((element) => {
        str += element;
    });
    return str;
};

console.log(string(["albert", "wesker"]));