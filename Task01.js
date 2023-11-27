'use strict';

const convert = (price) => price * 1.2 * 73;
const priceRub = convert(10);
console.log(`10 евро это ${priceRub} рублей`);