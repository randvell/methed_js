'use strict';

{
  const getRandomArray = (count, n, m, type) => {
    const from = Math.min(n, m);
    const to = Math.max(n, m);

    const arr = [];
    for (let i = 0; i < count; i++) {
      let number = Math.round(Math.random() * (to - from) + from);
      if ((type === 'even' && number % 2 === 1) || (type === 'odd' && number % 2 === 0)) {
        if (number + 1 <= to) {
          number++;
        } else if (number - 1 >= from) {
          number--;
        } else {
          console.error('Задано невыполнимое условие');
          break;
        }
      }

      arr[i] = number;
    }

    return arr;
  }

  console.log(getRandomArray(10, 0, 30));
  console.log(getRandomArray(10, 0, 30, 'odd'))
  console.log(getRandomArray(10, 0, 30, 'even'))
  console.log(getRandomArray(2, 5, 5, 'even'))
}