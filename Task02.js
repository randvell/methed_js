'use strict';

{
  const getRandomArray = (count, n, m) => {
    const from = Math.min(n, m);
    const to = Math.max(n, m);

    const arr = [];
    for (let i = 0; i < count; i++) {
      arr[i] = Math.round(Math.random() * (to - from) + from);
    }

    return arr;
  }

  console.log(getRandomArray(10, 1, 5));
  console.log(getRandomArray(2, 10, 10))
  console.log(getRandomArray(5, -100, 100))

}