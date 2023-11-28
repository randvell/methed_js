'use strict';

const rateUsdEur = 1.2;
const rateRubUsd = 73;

const convert = (price) => price * rateUsdEur * rateRubUsd;
const priceRub = convert(10);
console.log(`10 евро это ${priceRub} рублей`);