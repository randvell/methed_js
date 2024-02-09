const container = document.querySelector('.container');

const input = document.createElement('input');
input.type = 'text';

const paragraph = document.createElement('p');
paragraph.textContent = 'Введите текст в поле выше';

container.append(input, paragraph);

input.addEventListener('input', () => {
  clearTimeout(this.timeout);

  this.timeout = setTimeout(() => {
    paragraph.textContent = input.value;
  }, 300);
});
