const sampleText = 'hello world Im Seraphine';

let freqvRelativ = (text) => {
    let result = {};
    let count = 0;
    for(let i = 0; i < text.length; i++)
    {
        if(text[i] !== ' ')
        {
            count++;
            if(text[i] in result)
                result[text[i]]++;
            else
                result[text[i]] = 1;
        }
    }
    for(let c in result)
        result[c] /= count;
    return result;
}

console.log(freqvRelativ(sampleText));