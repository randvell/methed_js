'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getFigureIndex = (text) => {
    if (!text) {
      return -1;
    }

    return FIGURES.findIndex(figure =>
      figure.startsWith(text.toLowerCase()));
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRoundResult = (player, computer) => (player - computer + 3) % 3;
  const game = () => function createGame() {
    const getChoice = () => {
      const textChoice = window.prompt('Камень / Ножницы / Бумага ?');
      if (textChoice === null) {
        if (window.confirm('Вы уверены? Нажмите "Ок" чтобы выйти')) {
          window.alert('Вы вышли из игры');
          return null;
        }

        return getChoice();
      }

      const index = getFigureIndex(textChoice);
      if (index === -1) {
        window.alert('Некорректный выбор. Попробуйте снова');
        return getChoice();
      }

      return index;
    };

    const getComputerChoice = () => getRandomIntInclusive(0, 2);

    const processTurn = (playerChoice, computerChoice) => {
      const roundResult = getRoundResult(playerChoice, computerChoice);
      console.log(FIGURES[playerChoice] + ' / ' + FIGURES[computerChoice]);

      let roundResultText;
      let roundResultValue;
      switch (roundResult) {
        case 0:
          roundResultValue = 0;
          roundResultText = 'Ничья';
          break;
        case 1:
          roundResultValue = -1;
          roundResultText = 'Вы проиграли';
          break;
        case 2:
          roundResultValue = 1;
          roundResultText = 'Вы выиграли';
          break;
        default:
          throw Error('Непредвиденный результат');
      }

      const message = 'Вы: ' + FIGURES[playerChoice] + '\n' +
          'Компьютер: ' + FIGURES[computerChoice] + '\n' +
          'Результат - ' + roundResultText;

      window.alert(message);
      return roundResultValue;
    };

    const turn = () => {
      const playerChoice = getChoice();
      if (playerChoice === null) {
        return null;
      }

      const computerChoice = getComputerChoice();
      const roundResult = processTurn(playerChoice, computerChoice);
      if (roundResult) {
        return roundResult;
      }

      return turn();
    };

    return turn();
  };

  window.rps = game;
})();
