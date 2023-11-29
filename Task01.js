'use strict';

{
  const getRandomArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = Math.round(Math.random() * 100);
    }

    return arr;
  }

  console.log(getRandomArray(10));
}