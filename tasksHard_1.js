const income = prompt('Введите ваш заработок');
const incomeAmount = parseFloat(income);

let taxRate;
if (incomeAmount > 50000) {
  taxRate = 0.3;
} else if (incomeAmount >= 15000) {
  taxRate = 0.2;
} else {
  taxRate = 0.13
}

console.log('Размер налога: ' + taxRate * incomeAmount);