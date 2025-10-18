const words = [
    "mouse",
    "cat",
    "crocodile",
    "lion",
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) => 
    words.filter( (word) => 
        word !== forbiddenWord && word.length >= minLength);

console.log(filterWords(words, forbiddenWord, minLength));