const sir = "javascript este minunat";
const dictionary = ["este", "minunat"];

const censor = (text, dictionary) => {
    let modified = text.split(' ');
    dictionary.forEach(word => {
        let index = modified.indexOf(word);
        if(index !== -1 && modified[index].length > 2)
            modified[index] = modified[index].charAt(0) + '*'.repeat(modified[index].length - 2) + modified[index].charAt(modified[index].length - 1);
    });
    modified = modified.join(' ');
    return modified;
}

console.log(censor(sir, dictionary));