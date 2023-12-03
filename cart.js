'use strict';

const cart = {
  items: [],

  get totalPrice() {
    return this.calculateItemPrice();
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
      acc + (item.price * item.quantity), 0);
  },
  calculateItemQuantity() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
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

cart.count = 100;
cart.totalPrice = 9999;
cart.print();

cart.clear();
cart.print();
