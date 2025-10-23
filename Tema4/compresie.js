const fs = require('fs');

fs.readFile("./fisier.txt", "utf8", (error, data) => {
    if(error) {
        console.error("Nu s-a citit fisierul", error);
        return;
    } 
    console.log(data);

    let result = "";
    let count = 1;

    for(let i = 1; i < data.length; i++)
    {
        while(data[i] === data[i-1])
        {
            count++;
            i++;
        }
        result += data[i-1] + count;
        count = 1;
    }
    console.log(result);
})
