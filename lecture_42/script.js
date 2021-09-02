'use strict';

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

const onTopBtn = document.querySelector('#top');
onTopBtn.addEventListener('click', () => {
  box.scrollTop = 0;
  console.log(box.scrollTop);
});

const onDownBtn = document.querySelector('#down');
onDownBtn.addEventListener('click', () => {
  // window.scrollBy(0,400); //? (x = 0,y = 400) работает от текущей позиции
  window.scrollTo(0,400); //? (x = 0,y = 400) работает относительно всей страницы
});