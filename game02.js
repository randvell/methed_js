'use strict';

{
  const guessTheNumber = () => {
    window.alert('Вы запустили игру "отгадай число". ' +
    'В следующем окне вам будет предложено ввести нижний и верхний диапазон чисел для отгадывания, ' +
    'после чего бот сообщит доступное число попыток');

    const n = +prompt('Задайте нижний диапазон числа для отгадывания');
    const m = +prompt('Задайте верхний диапазон числа для отгадывания');
    if (Number.isNaN(n) || Number.isNaN(m)) {
      window.alert('Вы ввели некорректный диапазон!');
      return;
    }

    const from = Math.min(n, m);
    const to = Math.max(n, m);

    let tries = Math.round((to - from) * 0.3) || 1;
    const number = Math.round(Math.random() * (to - from) + from);
    window.alert(`Бот загадал число от ${from} до ${to}. Попробуйте отгадать его. Всего у вас есть ${tries} попыток.`);

    const suggests = [];
    while (tries > 0) {
      tries--;

      let suggest = prompt('Какое число загадано?');
      if (suggest === null) {
        window.alert('Вы нажали отмену');
        break;
      }

      suggest = +suggest;
      if (Number.isNaN(suggest) || suggest === 0) {
        window.alert('Введите число!');
        tries++;
        continue;
      }

      if (suggests.includes(suggest)) {
        window.alert('Это число вы уже вводили');
        tries++;
        continue;
      }

      if (suggest > to || suggest < from) {
        window.alert(`Введите число в диапазоне от ${from} до ${to}`);
        tries++;
        continue;
      }

      suggests.push(suggest);
      if (suggest === number) {
        window.alert('Правильно!');
        break;
      }
      if (suggest > number) {
        window.alert('Меньше!');
        continue;
      }
      if (suggest < number) {
        window.alert('Больше!');
        continue;
      }
    }

    if (suggests) {
      window.alert('Введенные вами числа: ' + suggests);
    }
  }

  guessTheNumber();
}