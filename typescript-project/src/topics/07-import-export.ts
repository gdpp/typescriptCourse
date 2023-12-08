import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 250
    }
];

const [total, totalTax] = taxCalculation({products: shoppingCart, tax: 0.15})

console.log('Total: ', total)
console.log('Total Tax: ', totalTax)
