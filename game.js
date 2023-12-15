'use strict';

(() => {
  const FIGURES = ['rock', 'scissors', 'paper'];

  let _lang = 'ru';
  const setLanguage = (language) => {
    const choice = language.toLowerCase();
    if (choice === 'en' || choice === 'eng') {
      _lang = 'en';
      return;
    }
  };

  const tr = (text) => {
    const dict = {
      ru: {
        rock: 'камень',
        scissors: 'ножницы',
        paper: 'бумага',
        gameError: 'Что-то пошло не так',
        draw: 'Ничья',
        win: 'Вы победили',
        lost: 'Вы проиграли',
        functionError: 'Непредвиденный результат',
        roundStart: 'Камень / Ножницы / Бумага ?',
        gameResult: 'Результаты:',
        you: 'Вы: ',
        computer: 'Компьютер: ',
        result: 'Результат - ',
        exitConfirmation: 'Вы уверены? Нажмите "Ок" чтобы выйти',
        exitText: 'Вы вышли из игры',
        invalidInput: 'Некорректный выбор. Попробуйте снова',
      },
      en: {
        rock: 'rock',
        scissors: 'scissors',
        paper: 'paper',
        gameError: 'Something went wrong',
        draw: 'A draw',
        win: 'You win',
        lost: 'You lose',
        functionError: 'Unpredictable result',
        roundStart: 'Rock / Paper / Scissors ?',
        gameResult: 'Game results:',
        you: 'You: ',
        computer: 'Computer: ',
        result: 'Result - ',
        exitConfirmation: 'Are you sure? Press "OK" to leave',
        exitText: 'You left the game.',
        invalidInput: 'Invalid input. Try again.',
      },
    };

    if (dict?.[_lang]?.[text] !== undefined) {
      return dict[_lang][text];
    }

    console.warn(`Отсутствует перевод для "${text}"`);
    return text;
  };

  const getFigureIndex = (text) => {
    if (!text) {
      return -1;
    }

    return FIGURES.findIndex(figure =>
      tr(figure).startsWith(text.toLowerCase()));
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRoundResult = (player, computer) => (player - computer + 3) % 3;

  const notifyGameResult = (result) => {
    const message = tr('gameResult') + '\n' +
      tr('you') + result.player + '\n' +
      tr('computer') + result.computer;

    window.alert(message);
  };

  const game = (language = 'RUS') => {
    setLanguage(language);

    const result = {
      player: 0,
      computer: 0,
    };

    return function createGame() {
      const getChoice = () => {
        const textChoice = window.prompt(tr('roundStart'));
        if (textChoice === null) {
          if (window.confirm(tr('exitConfirmation'))) {
            window.alert(tr('exitText'));
            return null;
          }

          return getChoice();
        }

        const index = getFigureIndex(textChoice);
        if (index === -1) {
          window.alert(tr('invalidInput'));
          return getChoice();
        }

        return index;
      };

      const getComputerChoice = () => getRandomIntInclusive(0, 2);

      const processTurn = (playerChoice, computerChoice) => {
        const roundResult = getRoundResult(playerChoice, computerChoice);
        console.log(tr(FIGURES[playerChoice]) + ' / ' +
          tr(FIGURES[computerChoice]));

        let roundResultText;
        switch (roundResult) {
          case 0:
            roundResultText = tr('draw');
            break;
          case 1:
            result.computer++;
            roundResultText = tr('lost');
            break;
          case 2:
            result.player++;
            roundResultText = tr('win');
            break;
          default:
            throw Error(tr('functionError'));
        }

        const message = tr('you') + tr(FIGURES[playerChoice]) + '\n' +
          tr('computer') + tr(FIGURES[computerChoice]) + '\n' +
          tr('result') + roundResultText;

        window.alert(message);
      };

      const turn = () => {
        const playerChoice = getChoice();
        if (playerChoice === null) {
          notifyGameResult(result);
          return;
        }

        const computerChoice = getComputerChoice();
        processTurn(playerChoice, computerChoice);
        return turn();
      };

      turn();
    };
  };

  window.createGame = game;
})();
