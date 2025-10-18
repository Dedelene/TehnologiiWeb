const birthYear = [2004, 1990, 2010, 2007];

const minAge = 18;

const filterAge = (birthYear, minAge) => 
    birthYear.map(year => 2025 - year).filter( age => age >= minAge);

console.log(filterAge(birthYear, minAge));