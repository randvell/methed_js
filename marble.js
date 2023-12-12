'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const game = () => {
    window.alert('Игра начата. У вас каждого есть по 5 шариков. ' +
      'Первым ходит игрок');

    const state = {
      player: 5,
      computer: 5,
    };

    const getScoreString = () => ('Баланс шариков:\nИгрок: ' + state.player +
      '\nКомпьютер: ' + state.computer);

    const player = {
      name: 'player',
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
      name: 'computer',
      guess: () => getRandomIntInclusive(0, 1),
      bet: () => getRandomIntInclusive(1, state.computer),
    };

    let attacker = player;
    let defendant = computer;

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

      let resultString = attacker.name + ' ставит ' + bet + '\n' +
        defendant.name + ' угадывает: ' +
        (guess === 0 ? 'четное' : 'нечетное');

      if (bet % 2 === guess) {
        state[attacker.name] -= bet;
        state[defendant.name] += bet;
        resultString += '\nПобеда за ' + defendant.name +
          '\n' + getScoreString();
      } else {
        state[attacker.name] += bet;
        state[defendant.name] -= bet;
        resultString += '\nПобеда за ' + attacker.name + '\n' +
          getScoreString();
      }

      window.alert(resultString);

      if (state.player <= 0) {
        window.alert('Вы проиграли');
        return;
      }
      if (state.computer <= 0) {
        window.alert('Вы выиграли');
        return;
      }

      const tempDefendant = defendant;
      defendant = attacker;
      attacker = tempDefendant;

      turn();
    };

    turn();
  };

  window.marble = game;
})();
