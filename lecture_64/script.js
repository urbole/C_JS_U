'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
  form = document.querySelector('form'),
  change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = '#303640';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {

  if (localStorage.getItem('bg') === 'changed') {
    // localStorage.removeItem('bg');
    localStorage.setItem('bg', '');
    form.style.backgroundColor = '#242424';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = '#303640';
  }
});

const persone = {
  name: 'Alex',
  age: 25
};

// const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(JSON.parse(localStorage.getItem('alex')));