const income = prompt('Введите ваш заработок');
const incomeAmount = parseFloat(income);

let taxAmount;
if (incomeAmount <= 15000) {
  taxAmount = incomeAmount * 0.13;
} else if (incomeAmount <= 50000) {
  taxAmount = 15000 * 0.13 + (incomeAmount - 15000) * 0.20;
} else {
  taxAmount = 15000 * 0.13 + (50000 - 15000) * 0.20 + (incomeAmount - 50000) * 0.30;
}

console.log('Размер налога: ' + taxAmount);g