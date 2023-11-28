'use strict';

const findDivider = (a, b) => {
  for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

console.log('Наибольший общий делитель 3 и 9: ' + findDivider(3, 9));
console.log('Наибольший общий делитель 5 и 19: ' + findDivider(5, 19));