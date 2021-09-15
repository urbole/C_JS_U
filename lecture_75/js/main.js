'use strict';

// try {
//   console.log('normal');
//   console.log(a);
//   console.log('result');
// } catch (error) {
//   console.log('error.name - ',error.name);
//   console.log('error.message - ',error.message);
//   console.log('error.stack - ',error.stack);
// } finally {
//   //* код тут будет выполнен в любом случае
// }

// console.log('still normal');


try {
  document.querySelector('.active').addEventListener('click', () => console.log('click'));
} catch(e){
  console.log(e);
}

console.log('normal');