'use strict';

{
  const getAverageValue = (checks) => {
    let productQuantity = 0;
    let totalProductAmount = 0;

    for (const check of checks) {
      const [ checkQuantity, checkTotal ] = check;
      
      productQuantity++;
      totalProductAmount += checkTotal / checkQuantity;
    }

    return totalProductAmount / productQuantity;
  }

  const allCashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  console.log('Средняя стоимость товаров: ' + getAverageValue(allCashbox));
}