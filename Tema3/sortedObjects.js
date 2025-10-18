const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    }
];

const s = "ram";

const sort = (laptops, s) => {
    return laptops.sort((a,b) => a[s] - b[s]);
}

console.log(sort(laptops, s));