'use strict';

(() => {
  const FIGURES = ['rock', 'scissors', 'paper'];

  let _lang = 'ru';
  const setLanguage = (language) => {
    const choice = language.toLowerCase();
    if (choice === 'en' || choice === 'eng') {
      _lang = 'en';
    }
  };

  const _ = (text) => {
    if (_lang === 'en') {
      return text;
    }

    const dict = {
      'rock': {
        ru: 'камень',
      },
      'scissors': {
        ru: 'ножницы',
      },
      'paper': {
        ru: 'бумага',
      },
      'Something went wrong': {
        ru: 'Что-то пошло не так',
      },
      'A draw': {
        ru: 'Ничья',
      },
      'You win': {
        ru: 'Вы победили',
      },
      'You lose': {
        ru: 'Вы проиграли',
      },
      'Unpredictable result': {
        ru: 'Непредвиденный результат',
      },
      'Rock / Paper / Scissors ?': {
        ru: 'Камень / Ножницы / Бумага ?',
      },
      'Game results:': {
        ru: 'Результаты:',
      },
      'You: ': {
        ru: 'Вы: ',
      },
      'Computer: ': {
        ru: 'Компьютер: ',
      },
      'Result - ': {
        ru: 'Результат - ',
      },
      'Are you sure? Press "OK" to leave': {
        ru: 'Вы уверены? Нажмите "Ок" чтобы выйти',
      },
      'You left the game.': {
        ru: 'Вы вышли из игры',
      },
      'Invalid input. Try again.': {
        ru: 'Некорректный выбор. Попробуйте снова',
      },
    };

    if (dict?.[text]?.[_lang] !== undefined) {
      return dict[text][_lang];
    }

    console.warn(`Отсутствует перевод для "${text}"`);

    return text;
  };

  const getFigureIndex = (text) => {
    if (!text) {
      return -1;
    }

    return FIGURES.findIndex(figure =>
      _(figure).startsWith(text.toLowerCase()));
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRoundResult = (player, computer) => (player - computer + 3) % 3;

  const notifyGameResult = (result) => {
    const message = _('Game results:') + '\n' +
      _('You: ') + result.player + '\n' +
      _('Computer: ') + result.computer;

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
        const textChoice = window.prompt(_('Rock / Paper / Scissors ?'));
        if (textChoice === null) {
          if (window.confirm(_('Are you sure? Press "OK" to leave'))) {
            window.alert(_('You left the game.'));
            return null;
          }

          return getChoice();
        }

        const index = getFigureIndex(textChoice);
        if (index === -1) {
          window.alert(_('Invalid input. Try again.'));
          return getChoice();
        }

        return index;
      };

      const getComputerChoice = () => getRandomIntInclusive(0, 2);

      const processTurn = (playerChoice, computerChoice) => {
        const roundResult = getRoundResult(playerChoice, computerChoice);
        console.log(_(FIGURES[playerChoice]) + ' / ' +
          _(FIGURES[computerChoice]));

        let roundResultText;
        switch (roundResult) {
          case 0:
            roundResultText = _('A draw');
            break;
          case 1:
            result.computer++;
            roundResultText = _('You lose');
            break;
          case 2:
            result.player++;
            roundResultText = _('You win');
            break;
          default:
            throw Error(_('Unpredictable result'));
        }

        const message = _('You: ') + _(FIGURES[playerChoice]) + '\n' +
          _('Computer: ') + _(FIGURES[computerChoice]) + '\n' +
          _('Result - ') + roundResultText;

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

  window.rps = game;
})();
