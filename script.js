const list = document.querySelector('.list');

(() => {
  const requestPrompt = () => {
    let userPrompt = prompt('Введите значение для добавление в таблицу' +
      ' или управляющую команду');
    if (userPrompt === 'exit' || userPrompt === null) {
      return;
    }

    userPrompt = userPrompt.trim();
    if (userPrompt === '') {
      window.alert('Введено некорректное значение');
      return requestPrompt();
    }

    return userPrompt;
  }

  const process = () => {
    const userPrompt = requestPrompt();
    if (!userPrompt) {
      window.alert('Вы вышли из приложения');
      return;
    }
    if (userPrompt === 'del') {
      list.lastElementChild.remove();
      return process();
    }
    if (userPrompt === 'clear') {
      list.textContent = '';
      return process();
    }

    const newLi = document.createElement('li');
    const liValue = document.createTextNode(userPrompt);
    newLi.append(liValue);
    list.append(newLi);

    process();
  }

  process();
})();
