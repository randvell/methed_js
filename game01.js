'use strict';

{
  const guessTheNumber = () => {
    const number = Math.ceil(Math.random() * 100);

    do {
      let suggest = prompt('Какое число загадано?');
      if (suggest === null) {
        console.log('Вы нажали отмену');
        return;
      }

      suggest = +suggest;
      if (Number.isNaN(suggest) || suggest === 0) {
        window.alert('Введите число!');
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
    } while (true);
  }

  guessTheNumber();
}