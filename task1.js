'use strict';

const game = {
  suggests: [],

  start() {
    this.suggests = [];

    window.alert('Вы запустили игру "отгадай число". ' +
      'В следующем окне вам будет предложено ввести нижний и ' +
      'верхний диапазон чисел для отгадывания, ' +
      'после чего бот сообщит доступное число попыток');

    const n = +prompt('Задайте нижний диапазон числа для отгадывания');
    const m = +prompt('Задайте верхний диапазон числа для отгадывания');
    if (Number.isNaN(n) || Number.isNaN(m)) {
      window.alert('Вы ввели некорректный диапазон!');
      return;
    }

    this.from = Math.min(n, m);
    this.to = Math.max(n, m);

    this.tries = Math.round((this.to - this.from) * 0.3) || 1;
    this.number = Math.round(Math.random() * (this.to - this.from) + this.from);
    window.alert(`Бот загадал число от ${this.from} до ${this.to}. ` +
    `Попробуйте отгадать его. Всего у вас есть ${this.tries} попыток.`);

    this.guessTheNumber();

    if (this.suggests) {
      window.alert('Введенные вами числа: ' + this.suggests);
    }
  },
  guessTheNumber() {
    if (!this.number) {
      window.alert('Необходимо начать игру!');
      return;
    }

    if (this.tries === 0) {
      window.alert('У вас закончились попытки');
      return;
    }

    let suggest = prompt('Какое число загадано?');
    if (suggest === null) {
      window.alert('Вы нажали отмену');
      return;
    }

    suggest = +suggest;
    if (Number.isNaN(suggest) || suggest === 0) {
      window.alert('Введите число!');
      return this.guessTheNumber();
    }

    if (this.suggests.includes(suggest)) {
      window.alert('Это число вы уже вводили');
      return this.guessTheNumber();
    }

    if (suggest > this.to || suggest < this.from) {
      window.alert(`Введите число в диапазоне от ${this.from} до ${this.to}`);
      return this.guessTheNumber();
    }

    this.tries--;
    this.suggests.push(suggest);
    if (suggest === this.number) {
      window.alert('Правильно!');
      return;
    }
    if (suggest > this.number) {
      window.alert('Меньше!');
      return this.guessTheNumber();
    }
    if (suggest < this.number) {
      window.alert('Больше!');
      return this.guessTheNumber();
    }
  },
};

game.start();
