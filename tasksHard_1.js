'use strict';

const income = +prompt('Введите ваш заработок');
if (Number.isNaN(income) || income < 0) {
  console.error('Введено некорректное значение');
} else {
  const taxRate = calcTaxRate(income);
  console.log('Размер налога: ' + taxRate * income);
}

function calcTaxRate(income) {
  min(income, 15000) * 0.13 +
   max(0, min(income - 15000, 50000 - 15000)) * 0.2 +
    max(0, income - 50000) * 0.3
}