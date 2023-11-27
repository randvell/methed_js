'use strict';

const income = +prompt('Введите ваш заработок');
if (Number.isNaN(income) || income < 0) {
  console.error('Введено некорректное значение');
} else {
  const taxRate = calcTaxRate(income);
  console.log('Размер налога: ' + taxRate * income);
}

function calcTaxRate(income) {
  if (income > 50000) {
    return 0.3;
  }
  if (income >= 15000) {
    return 0.2;
  }
  if (income >= 0) {
    return 0.13
  }
}