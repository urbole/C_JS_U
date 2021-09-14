// 'use strick';

const person = {
  name: 'Alex',
  age: 25,

  get userAge() {
    return this.age;
  },


};

console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);