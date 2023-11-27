'use strict';

const findDivider = (a, b) => {
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 'не существует';
}

console.log('Общий делитель 3 и 9: ' + findDivider(3, 9));
console.log('Общий делитель 5 и 19: ' + findDivider(5, 19));