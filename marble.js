'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const game = () => {
    window.alert('Игра начата. У каждого игрока на старте есть по 5 шариков. ' +
      'Первым ходит игрок');

    const state = {
      player: 5,
      computer: 5,
    };

    const getScoreString = () => ('Баланс шариков:\nИгрок: ' + state.player +
      '\nКомпьютер: ' + state.computer);

    const player = {
      key: 'player',
      name: 'Игрок',
      guess: () => {
        const choice = window.prompt('Какое количество шариков ' +
          'загадал соперник? Введите ч / н');

        if (choice === null) {
          if (window.confirm('Вы уверены что хотите выйти из игры?')) {
            return null;
          }
        }
        if (choice === 'ч') {
          return 0;
        }
        if (choice === 'н') {
          return 1;
        }

        window.alert('Неправильное значение!');
        return player.guess();
      },
      bet: () => {
        const choice = window.prompt(`Сделайте ставку от 1 до ` +
          `${state.player} шариков`);

        if (choice === null) {
          if (window.confirm('Вы уверены что хотите выйти из игры?')) {
            return null;
          }
        }

        const number = Number.parseInt(choice);
        if (Number.isNaN(number) || number < 0 || number > state.player) {
          window.alert('Введено неправильное значение!');
          return player.bet();
        }

        return number;
      },
    };

    const computer = {
      key: 'computer',
      name: 'Компьютер',
      guess: () => getRandomIntInclusive(0, 1),
      bet: () => getRandomIntInclusive(1, state.computer),
    };

    window.alert('Для определения порядка ходов будет сыграна ' +
      'партия в "Камень Ножницы Бумага"');
    const rpsResult = window.rps()();
    if (rpsResult === null) {
      return;
    }

    let attacker = rpsResult === 1 ? player : computer;
    let defendant = rpsResult === 1 ? computer : player;
    window.alert('Первым ходит ' + attacker.name);

    const turn = () => {
      const bet = attacker.bet();
      if (bet === null) {
        window.alert('Вы вышли из игры');
        return;
      }

      const guess = defendant.guess();
      if (guess === null) {
        window.alert('Вы вышли из игры');
        return;
      }

      let resultString = `${attacker.name} ставит #${bet}\n` +
        `${defendant.name} угадывает: ` +
        (guess === 0 ? 'четное' : 'нечетное');

      /* Правилами не оговорено, что игрок не может
      поставить больше шариков, чем имеется у противника */
      if (bet % 2 === guess) {
        const maxValue = Math.min(bet, state[attacker.key]);
        state[attacker.key] -= maxValue;
        state[defendant.key] += maxValue;
        resultString += `\n${defendant.name} забирает #${maxValue}` +
          '\n\n' + getScoreString();
      } else {
        const maxValue = Math.min(bet, state[defendant.key]);
        state[attacker.key] += maxValue;
        state[defendant.key] -= maxValue;
        resultString += `\n${attacker.name} забирает #${maxValue}` +
          '\n\n' + getScoreString();
      }

      window.alert(resultString);

      if (state.player <= 0 || state.computer <= 0) {
        const gameResult = state.player <= 0 ? 'проиграли' : 'выиграли';
        if (window.confirm(`Вы ${gameResult}. Хотите сыграть еще?`)) {
          return game();
        }

        return;
      }

      const tempDefendant = defendant;
      defendant = attacker;
      attacker = tempDefendant;

      window.alert('Смена игроков. Теперь загадывает ' + attacker.name);
      turn();
    };

    turn();
  };

  window.marble = game;
})();
