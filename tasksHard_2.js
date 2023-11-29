'use strict';

{
  const income = +prompt('Введите ваш заработок');
  if (Number.isNaN(income) || income < 0) {
    console.error('Введено некорректное значение');
  } else {
    console.log('Размер налога: ' + calcTax(income));
    console.log('Размер налога: ' + calcTax2(income));
  }

  function calcTax2(income) {
    return Math.min(income, 15000) * 0.13 +
      Math.max(0, Math.min(income - 15000, 50000 - 15000)) * 0.2 +
      Math.max(0, income - 50000) * 0.3
  }

  function calcTax(income) {
    let totalTax = 0;
    let incomeLeft = income;
    if (incomeLeft > 50000) {
      totalTax += (incomeLeft - 50000) * 0.3;
      incomeLeft = 50000;
    }
    if (incomeLeft > 15000) {
      totalTax += (incomeLeft - 15000) * 0.2;
      incomeLeft = 15000;
    }
    if (incomeLeft > 0) {
      totalTax += incomeLeft * 0.13;
    }

    return totalTax;
  }
}