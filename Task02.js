'use strict';

const processString = (inputString) => inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();

let inputString = "пРиВет Мир";
let result = processString(inputString);
console.log(result);