'use strict';

{
  const income = +prompt('Введите ваш заработок');
  if (Number.isNaN(income) || income < 0) {
    console.error('Введено некорректное значение');
  } else {
    console.log('Размер налога: ' + calcTax(income));
  }

  function calcTax(income) {
    return Math.min(income, 15000) * 0.13 +
      Math.max(0, Math.min(income - 15000, 50000 - 15000)) * 0.2 +
      Math.max(0, income - 50000) * 0.3
  }
}