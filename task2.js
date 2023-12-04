'use strict';

{
  const createArr = (arr) => {
    if (!arr) {
      arr = [];
    }

    arr.push(Math.round(Math.random() * 10));
    if (arr.reduce((acc, current) => acc + current) > 50) {
      return arr;
    }

    return createArr(arr);
  };

  console.log(createArr());
}
