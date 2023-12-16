'use strict';

const ads = document.querySelector('.ads');
ads.remove();

const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');

itemThree.after(itemFour);

const listThreeItems = document.querySelectorAll('.props__item_three');
const listThree = itemThree.querySelector('.props__list');
listThreeItems.forEach((item) => {
  listThree.append(item);
});

const listFiveItems = document.querySelectorAll('.props__item_five');
const listFive = document.querySelector('.item_five .props__list');
listFiveItems.forEach((item) => {
  listFive.append(item);
});

const listTwo = document.querySelector('.item_two .props__list');
document.querySelectorAll('.item_six .props__item_two').forEach((item) => {
  listTwo.append(item);
});

const itemFourProps = itemFour.querySelectorAll('.props__item_four');
const lostItemFour = listTwo.querySelector('.props__item_four');
itemFourProps[2].after(lostItemFour);
