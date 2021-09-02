"use strict";

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = () => console.log(`Hello ${this.name}`);
}

User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();

console.log('🚀 ~ ivan', ivan);
console.log('🚀 ~ alex', alex);



class NewUser {
  constructor(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello(){
    console.log(`Hello ${this.name}`);
  }
  exit(){
    console.log(`Пользователь ${this.name} вышел`);
  }
}

const ivan2 = new NewUser('Ivan', 28);
const alex2 = new NewUser('Alex', 20);

ivan2.hello();
alex2.hello();

ivan2.exit();

console.log('🚀 ~ ivan2', ivan2);
console.log('🚀 ~ alex2', alex2);
