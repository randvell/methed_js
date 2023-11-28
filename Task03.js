'use strict';

{
  const revertString = (inputString) => {
    let resultString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      resultString += inputString[i];
    }

    return resultString;
  }

  console.log('Привет мир => ' + revertString('Привет мир'));
}