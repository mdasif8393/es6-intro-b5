const numbers = [5, 13, 7, 41, 5, 2, 19];
// const newNumbers = numbers.filter(number => number>10)
// const newNumbers = numbers.filter(number => number === 13)
// console.log(newNumbers);
const products = [
    {name:'water bottle', price: 40, color: 'green'},
    {name:'bottle', price: 54, color: 'een'},
    {name:'water', price: 443, color: 'grn'},
    {name:'water bottle', price: 40, color: 'green'},
]

const newProducts = products.find(product => (product.price === 40));
console.log(newProducts)