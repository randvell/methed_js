'use strict';

{
  const guessTheNumber = (n, m) => {
    const from = n > m ? m : n;
    const to = n > m ? n : m;

    let tries = Math.round((to - from) * 0.3);
    const number = Math.round(Math.random() * (to - from) + from);
    const suggests = [];
    do {
      tries--;

      let suggest = prompt('Какое число загадано?');
      if (suggest === null) {
        console.log('Вы нажали отмену');
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
    } while (tries > 0);

    if (suggests) {
      console.log('Ваши попытки: ' + suggests);
    }
  }

  guessTheNumber(1, 10);
}