'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice
  },
  add(name, price, quantity) {
    const item = { name, price, quantity }
    this.items.push(item);
    this.calculateItemPrice();
    this.increaseCount(quantity);
  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`В корзине ${this.count} позиции на общую сумму ${this.totalPrice}`);
  }
}

cart.add('Треники', 100, 2);
cart.print();
cart.add('Худи', 500, 3);
cart.print();
cart.add('Кроссовки', 1000, 1);
cart.print();
cart.clear();
cart.print();