// const numbers = [11, 22, 33, 44, 45];
// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

const products = [
    {name:'water bottle', price: 400, color: 'green'},
    {name:'bottle', price: 54, color: 'een'},
    {name:'water', price: 443, color: 'grn'},
    {name:'water bottle', price: 40, color: 'green'},
]
const newProducts = products.map(product => product.price);
console.log(newProducts);