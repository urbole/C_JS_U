"use strict";

//! 31 lesson

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// btn.addEventListener('click', (e) => {
// console.log(e);
// e.target.remove();
// console.log('test');
// });


let i = 0;
const deleteElement = (e) => {
  // e.target.remove();
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

btn.addEventListener('click', deleteElement, { once: true });
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target);
// });

//! 32 lesson

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

//? console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

//? console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

//? console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('#current').parentNode.parentNode);

//? console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//? console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {

  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}