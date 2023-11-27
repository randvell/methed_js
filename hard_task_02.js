'use strict';

const maxNumber = (a, b) => a - b > 0 ? a : b; 
console.log('Большее из чисел 5, 19: ' + maxNumber(5, 19));
console.log('Большее из чисел 44, 9: ' + maxNumber(44, 9));
console.log('Большее из чисел -5, -3: ' + maxNumber(-5, -3));
