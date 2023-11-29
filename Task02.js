'use strict';

{
  const getRandomArray = (count, n, m) => {
    const arr = [];
    const from = n > m ? m : n;
    const to = n > m ? n : m;
    for (let i = 0; i < count; i++) {
      arr[i] = Math.round(Math.random() * (to - from) + from);
    }

    return arr;
  }

  console.log(getRandomArray(10, 1, 5));
  console.log(getRandomArray(2, 10, 10))
  console.log(getRandomArray(5, -100, 100))

}