'use strict';

{
  const getAverageValue = (checks) => {
    let checksQuantity = 0;
    let totalCheckAmount = 0;

    for (const check of checks) {
      checksQuantity++;
      totalCheckAmount += check;
    }

    return totalCheckAmount / checksQuantity;
  }

  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
  console.log('Средний чек за день: ' + getAverageValue(allCashbox));
}