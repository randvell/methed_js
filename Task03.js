'use strict';

const calculate = (quoteAmount, productQty, coupon) => {
  let discount = 0;
  if (productQty > 10) {
    discount += quoteAmount * 0.03;
  }
  if (quoteAmount > 30000) {
    discount += (quoteAmount - 30000) * 0.15;
  }

  if (coupon === 'METHED') {
    discount += quoteAmount * 0.1;
  }
  if (coupon === 'G3H2Z1' && quoteAmount - discount > 2000) {
    discount += 500;
  }

  return quoteAmount - discount;
}

const discount = calculate(50000, 11, 'METHED');
console.log(`11 товаров на общую сумму 50000 рублей с промокодом "METHED"
Цена с учетом всех скидок: ${discount}`);