'use strict';

{
  const addPrefix = (values, prefix) => values.map((value) => prefix + ' ' + value);

  const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
  console.log(addPrefix(names, 'Mr').join(', '));
}