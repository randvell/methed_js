'use strict';

function findMin(a, b) {
  return (a + b - Math.abs(a - b)) / 2;
}

console.log('Меньшее из чисел 5, 19: ' + findMin(5, 19));
console.log('Меньшее из чисел 44, 9: ' + findMin(44, 9));
console.log('Меньшее из чисел -5, -3: ' + findMin(-5, -3));
