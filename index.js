const container = document.querySelector('.container');

const input = document.createElement('input');
input.type = 'text';

const paragraph = document.createElement('p');
paragraph.textContent = 'Введите текст в поле выше';

container.append(input, paragraph);

input.addEventListener('change', (e) => {
  setTimeout(() => {
    paragraph.textContent = e.target.value;
  }, 300);
});
