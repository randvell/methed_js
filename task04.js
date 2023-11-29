'use strict';

{
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function getLeapYearsArray(n, m) {
    const startYear = n > m ? m : n;
    const endYear = n > m ? n : m;
  
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
      if (isLeapYear(year)) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  console.log(getLeapYearsArray(-100, 100));
  console.log(getLeapYearsArray(1700, 2000));
}