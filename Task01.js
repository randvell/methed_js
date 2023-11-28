'use strict';

{
let table = [];
for (let m = 1; m <= 10; m++) {
  let values = [];
  for (let a = 1; a <= 10; a++) {
    values[a] = m ** a; 
  }

  table[m] = values;
}

console.log('Таблица степеней: ');
console.table(table);
}