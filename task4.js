'use strict';

const cart = {
  discount: 0,
  items: [],

  get totalPrice() {
    return this.calculateItemPrice() * (100 - this.discount) / 100;
  },
  get count() {
    return this.calculateItemQuantity();
  },
  add(name, price, quantity) {
    const item = {name, price, quantity};
    this.items.push(item);
  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) =>
      acc + ((item.price * item.quantity)), 0);
  },
  calculateItemQuantity() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  },
  setDiscount(discount) {
    if (discount === 'METHED') {
      this.discount = 15;
      return;
    }
    if (discount === 'NEWYEAR') {
      this.discount = 21;
      return;
    }
  },
  clear() {
    this.items = [];
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`В корзине ${this.count} позиции ` +
      `на общую сумму ${this.totalPrice}`);
  },
};

cart.add('Треники', 100, 2);
cart.print();
cart.add('Худи', 500, 3);
cart.print();
cart.add('Кроссовки', 1000, 1);
cart.print();

cart.setDiscount('test');
cart.print();
cart.setDiscount('METHED');
cart.print();
cart.setDiscount('NEWYEAR');
cart.print();
