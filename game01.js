'use strict';

{
  const guessTheNumber = () => {
    const from = 1;
    const to = 100;
    const number = Math.round(Math.random() * (to - from) + from);
    window.alert(`Бот загадал число от ${from} до ${to}. Попробуйте отгадать его`);

    while (true) {
      if (suggest === null) {
        window.alert('Вы нажали отмену');
        return;
      }

      suggest = +suggest;
      if (Number.isNaN(suggest) || suggest === 0) {
        window.alert('Введите число!');
        continue;
      }
      if (suggest > to || suggest < from) {
        window.alert(`Введите число в диапазоне от ${from} до ${to}`);
        continue;
      }

      if (suggest === number) {
        window.alert('Правильно!');
        return;
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
  }

  guessTheNumber();
}