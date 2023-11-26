// const rain = Math.round(Math.random());
// if (rain) {
//   console.log('Пошёл дождь. Возьмите зонт!');
// } else {
//   console.log('Дождя нет!');
// }

// const exams = ['математике', 'русскому языку', 'информатике'];

// let totalScore = 0;
// for (let i = 0; i < 3; i++) {
//   const value = prompt('Введите кол-во баллов по ' + exams[i]);
//   if (Number.isNaN(parseInt(value))) {
//     alert('Введено некорректное значение!');
//   }

//   totalScore += +value;
// }

// if (totalScore >= 265) {
//   console.log('Поздравляю, вы поступили на бюджет!');
// } else {
//   console.log('Увы. Попробуйте через год.');
// }

// const withdrawalRequest = prompt('Сколько денег вы хотите снять?');
// const parsedValue = parseInt(withdrawalRequest);
// if (isNaN(parsedValue) || parsedValue % 100) {
//   console.log('К сожалению, банкомат не может выдать запрошенную сумму');
// } else {
//   console.log('Заберите ваши деньги');
// }