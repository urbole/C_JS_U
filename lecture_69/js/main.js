'use strick';

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`${this.name}, возраст ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

//! Classes

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   say() {
//     console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// // console.log(ivan._age); //* обход гетеров и сетеров так можно поменять значение, но так делать нельзя
// ivan.age = 99;
// console.log(ivan.age);
// ivan.say();

//! экспериментальный синтаксис
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = ' Sdsfg' //* создание приватного свойства в классах

  say = () => {
    console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение');
    }
  }

  get surname(){
    return this.#surname;
  }

  set surname(newData){
    this.#surname = newData;
  }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
console.log(ivan.surname);
ivan.say();
ivan.surname = ' Petrichenko';
console.log(ivan.surname);
ivan.say();


