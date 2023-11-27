'use strict';

const income = prompt('Введите ваш заработок');
const incomeAmount = parseFloat(income);
if (isNaN(incomeAmount) || incomeAmount < 0) {
  console.error('Введено некорректное значение');
} else {
  console.log('Размер налога: ' + calcTaxRate(income));
}

function calcTax(income) {
  let taxAmount = 0;
  let restIncome = income;

  if (restIncome >= 0) {
    incomeValue = restIncome - 15000 > 0 ? 15000 : restIncome;
    taxAmount += restIncome * 0.13;
    restIncome -= incomeValue;
  }

  if (restIncome >= 0) {
    incomeValue = restIncome - 35000 > 0 ? 35000 : restIncome;
    taxAmount += restIncome * 0.2;
    restIncome -= incomeValue;
  }

  if (restIncome >= 0) {
    taxAmount += restIncome * 0.3;
  }

  return taxAmount;
}