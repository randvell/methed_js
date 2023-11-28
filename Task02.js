'use strict';

{
  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < 10; i++) {
    const number = Math.round(Math.random() * 100);
    console.log(`Число ${number} является ${isPrime(number) ? 'простым' : 'сложным'}`);
  }
}