"use strict";

//! filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];
const shortNames = names.filter(name => name.length < 5);
//* const shortNames = names.filter(function (name) {
//*   return name.length < 5;
//* });
console.log('🚀 ~ shortNames', shortNames);


//! map

// let answers = ['IvAn', 'AnnA', 'Hello'];
// answers = answers.map(item => item.toLowerCase()); //? мутируем массив, записываем в оригинальный
// console.log('🚀 ~ answers', answers);

const answers = ['IvAn', 'AnnA', 'Hello']; //* так лучше
const result = answers.map(item => item.toLowerCase()); //? записываем в новый массив
console.log('🚀 ~ result', result);


//! every/some //? возвращают булиновое значение

const some = [4, 'qwe', 'wsder'];
console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

//! reduce

const arr = [4, 5, 1, 3, 2, 6];
//*            300->0     4
//*            304->4     5
//*            309->9     1
//*            310->10    3
//*            313->13    2
//*            315->15    6
//* 21 + 300
const res = arr.reduce((sum, current) => sum + current, 300); //? 300 - это добавленное значение поумолчанию,
console.log('🚀 ~ res', res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log('🚀 ~ res', res);

const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
  .filter(item => item[1] === 'persone')
  .map(item => item[0]);
console.log(newArr);