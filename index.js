'use strict';

{
  const quantity = 3;
  const productName = 'Спортивные штаны Adidas';
  const productCategory = 'Брюки';
  const price = 1800;

  console.log('Товар: ' + productName);
  console.log('Общая стоимость: ' + price * quantity);
}

{
  const productName = requestValue('Наименование товара');
  const productCategory = requestValue('Категория товара')
  const quantity = requestValue('Кол-во товара', 'number');
  const price = requestValue('Цена за шт', 'number');

  function requestValue(valueName, type = 'string') {
    const value = prompt(`${valueName}: `);
    if (type === 'number' && !Number.isNaN(parseInt(value))) {
      return +value;
    }
    if (value.length) {
      return value;
    }
  }

  if (productName && productCategory && quantity && price) {
    console.log(`На складе ${quantity} единицы товара "${productName}" 
на сумму ${price * quantity} деревянных`);
  } else {
    console.error('Введены некорректные данные!');
  }
}