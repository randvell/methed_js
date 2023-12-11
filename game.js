'use strict';

(() => {
  const FIGURES = ['rock', 'scissors', 'paper'];

  let _language;
  const setLanguage = (language) => {
    const choice = language.toLowerCase();
    if (choice === 'en' || choice === 'eng') {
      _language = 'ENG';
    }
    if (choice === 'ru' || choice === 'rus') {
      _language = 'RUS';
    }
  };

  const _ = (text) => {
    if (_language !== 'RUS') {
      return text;
    }

    const ENG_RUS = new Map([
      ['rock', 'камень'],
      ['scissors', 'ножницы'],
      ['paper', 'бумага'],
      ['Something went wrong', 'Что-то пошло не так'],
      ['A draw', 'Ничья'],
      ['You win', 'Вы победили'],
      ['You lose', 'Вы проиграли'],
      ['Unpredictable result', 'Непредвиденный результат'],
      ['Rock / Paper / Scissors ?', 'Камень / Ножницы / Бумага ?'],
      ['Game results:', 'Результаты:'],
      ['You: ', 'Вы: '],
      ['Computer: ', 'Компьютер: '],
      ['Result - ', 'Результат - '],
      [
        'Are you sure? Press "OK" to leave',
        'Вы уверены? Нажмите "Ок" чтобы выйти',
      ],
      ['You left the game.', 'Вы вышли из игры'],
    ]);

    if (ENG_RUS.has(text)) {
      return ENG_RUS.get(text);
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
        let textChoice = window.prompt(_('Rock / Paper / Scissors ?'));
        if (textChoice === null) {
          textChoice = window.prompt(_('Are you sure? Press "OK" to leave'));
          if (textChoice === '') {
            window.alert(_('You left the game.'));
            return null;
          }

          return getChoice();
        }

        return getFigureIndex(textChoice);
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
        if (playerChoice === -1) {
          return turn();
        }
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
