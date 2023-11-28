'use strict';

const calculate = (cartTotal, productQuantity, coupon) => {
  let discount = 0;
  if (productQuantity > 10) {
    discount += cartTotal * 0.03;
  }
  if (cartTotal > 30000) {
    discount += (cartTotal - 30000) * 0.15;
  }

  if (coupon === 'METHED') {
    discount += cartTotal * 0.1;
  }
  if (coupon === 'G3H2Z1' && cartTotal - discount > 2000) {
    discount += 500;
  }

  return cartTotal - discount;
}

const discount = calculate(50000, 11, 'METHED');
console.log(`11 товаров на общую сумму 50000 рублей с промокодом "METHED"
Цена с учетом всех скидок: ${discount}`);