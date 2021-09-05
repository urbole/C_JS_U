"use strict";

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'TV',
//       price: 2000
//     };

//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'ordered';
//       resolve(product);
//       // reject();
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(()=>{ //? добавляется в конец цепочки вызовов сработает при ошибке reject()
//   console.error('Произошла ошибка');
// }).finally(()=>{ //? сработает в любом случае в конце всей цепочки, даже после ошибки, допустим очистить форму
//   console.log('finally');
// });


const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};
// const test = time => new Promise(resolve => setTimeout(() => resolve(), time)); //? сокращенная запись

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => { //? реагирует если все промисы сработали
  console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => { //? реагирует после удачного срабатывания промиса что выполнился первым
  console.log('All');
});