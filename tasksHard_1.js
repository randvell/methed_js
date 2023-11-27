'use strict';

const income = prompt('Введите ваш заработок');
const incomeAmount = parseFloat(income);
if (isNaN(incomeAmount) || incomeAmount < 0) {
  console.error('Введено некорректное значение');
} else {
  const taxRate = calcTaxRate(income);
  console.log('Размер налога: ' + taxRate * incomeAmount);
}

function calcTaxRate(income) {
  if (incomeAmount > 50000) {
    return 0.3;
  }
  if (incomeAmount >= 15000) {
    return 0.2;
  }
  if (income >= 0) {
    return 0.13
  }
}