// 'use strict';

//? 1) Обычная функция: this = window, но если 'use strict' - undefined

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

//? 2) Контекст у методов объекта - сам объект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () { //? эта функция вызвана в объекте ее this = объект
//     console.log(this);
//     function shout() { //? эта функция в функции ее this = window
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();

//? 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = () => console.log('Hello! ' + this.name);
// }
// let ivan = new User('Ivan', 23);
// console.log('🚀 ~ ivan', ivan);
// ivan.hello();

//? 4) ручная привязка this: call, apply, bind

// function seyName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John"
// };

// seyName.call(user, ' Smith');
// seyName.apply(user, [' Smith']);

// function count(num){
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   console.log(this);
//   this.style.backgroundColor = "bisque";
// });

// const obj = {
//   num: 5,
//   seyNumber: function () {
//     const sey = () => {
//       console.log(this);
//       console.log(this.num);
//     };
//     sey();
//   }
// };

// obj.seyNumber();

// const double = a => a * 2;
// console.log(double(4));

function Period (hours, minutes) {  
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = function() {  
  console.log(this === window); // => true
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};
var walkPeriod = new Period(2, 30);  
console.log(walkPeriod.format());

