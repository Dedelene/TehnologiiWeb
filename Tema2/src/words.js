const simpleText = 'the quick brown fox jumps over the lazy dog';

let getCounts = (text) => {
    let words = text.split(' ');
    let result = {};
    for(let word of words) 
    {
        if(word in result)
            result[word]++;
        else
            result[word] = 1;
    }
    for(let word in result)
        result[word] /= words.length;
    return result;
}

console.log(getCounts(simpleText));