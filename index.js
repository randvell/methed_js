'use strict';

const filterJsFiles = (files) => {
  const extensionRegex = /\.(js|jsx|ts)$/;

  const filteredFiles = files.filter((fileName) => {
    return extensionRegex.test(fileName);
  });

  return filteredFiles;
};

const files = [
  'module.jsx',
  'index.html',
  'style.css',
  'index.js',
  'file.ts',
  'library.css',
  'my.plugin.js',
];

const filteredFiles = filterJsFiles(files);
console.log('ALL:', files);
console.log('Filtered:', filteredFiles);

const emailRegex = /^\w+@[a-zZ-Z]{3,}.[a-zZ-Z]{2,5}/;
const checkEmail = (email) => {
  return emailRegex.test(email);
};

const validEmails = [
  'info@methed.ru',
  'max24@mail.com',
  'java_script@google.io',
];
const invalidEmails = ['my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];

console.log('Проверяем валидные емейлы');
validEmails.forEach((email) => {
  console.log(email + ' - ' + (checkEmail(email) ? 'валидный' : 'невалидный'));
});

console.log('Проверяем невалидные емейлы');
invalidEmails.forEach((email) => {
  console.log(email + ' - ' + (checkEmail(email) ? 'валидный' : 'невалидный'));
});

const textRegex = /\((.*?)\)/g;
const text = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.`;

const matches = [];
let match;
while ((match = textRegex.exec(text))) {
  matches.push(match[1]);
}
console.log('Текст в скобках:', matches);
