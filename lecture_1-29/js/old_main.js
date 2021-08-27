"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ""),
        b = +prompt('На сколько оцените его?', "");
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        i--;
        console.log('error');
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log('error');
    }
    // console.log("🚀 ~ personalMovieDB.count", personalMovieDB.count);
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log("🚀 ~ personalMovieDB", personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // personalMovieDB.genres[i - 1] = genre;
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  }
};



/************************************************************************** */
function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
};

function second() {
  console.log(2);
}

// first();
// second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок');
}

// learnJS('JS', done);


const options = {
  name: 'test',
  with: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    // console.log('test');
  },
};

options.makeTest();

// console.log(options['colors']['border']);
// delete options.name;
// console.log('🚀 ~ options', options);

let count = 0;
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      // console.log(`Свойство: ${i} имеет значение: ${options[key][i]}`);
      count++;
    }
  } else {
    // console.log(`Свойство: ${key} имеет значение: ${options[key]}`);
    count++;
  }
}

// console.log(Object.keys(options).length);

const { border, bg } = options.colors;
// console.log('🚀 ~ border', border);

const arr = [1, 12, 3, 41, 15, 6, 17, 8];
arr.pop();
arr.push(10);
arr.shift();
arr.unshift(0);
// console.log('🚀 ~ arr', arr);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  // console.log('🚀 ~ element', element);
}

for (let value of arr) {
  // console.log('🚀 ~ value', value);
}

arr[99] = 55;
// console.log('🚀 ~ arr.length', arr.length);
// console.log('🚀 ~ arr', arr);

arr.forEach(function (item, i, arr) {
  // console.log(`🚀 ~ ${i} это индекс элемента/значения "${item}" внутри массива -> ${arr}`);
});

// const str = prompt('', '');
// const products = str.split(', '); //? наличие пробела влияет на результат
// console.log('🚀 ~ products', products);
// products.sort(); //? без аргумента - сортирует строки, другие типы сначала преобразуются в строки
// console.log(products.join('; ')); //? наличие пробела влияет на результат

arr.sort(compareNum);
function compareNum(a, b) {
  return a - b;
}
// console.log('🚀 ~ arr', arr);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};
// console.log('🚀 ~ numbers', numbers);

const newNumbers = copy(numbers);
newNumbers.a = 10; //? изменили данные у копии массива
newNumbers.c.x = 10; //? изменили данные у значения оригинального массива
// console.log('🚀 ~ newNumbers', newNumbers);

const add = {
  d: 17,
  e: 20
}

const resultAdd = Object.assign(numbers, add); //? новый объект с данными из тех что в аргументах (поверхностная копия)
// console.log('🚀 ~ resultAdd', resultAdd);

const resultCopy = Object.assign({}, add); //? чистая (поверхностная) копия объекта
// console.log('🚀 ~ resultCopy', resultCopy);
resultCopy.d = 20; //? не изменило оригинальный объект
// console.log('🚀 ~ resultCopy', resultCopy);

const oldArr = ['a', 'd', 'c'];
const newArr = oldArr.slice(); //? слайс без аргумента копирует массив
newArr[1] = 'sdfsdfdsf';
// console.log('🚀 ~ oldArr', oldArr);
// console.log('🚀 ~ newArr', newArr);

const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'in', 'fb']; //? спред оператор/оператор разворота
// console.log('🚀 ~ video', video);
// console.log('🚀 ~ blogs', blogs);
// console.log('🚀 ~ internet', internet);

function log(a, b, c) { //? функция вывода своих параметров в консоль
  // console.log(a);
  // console.log(b);
  // console.log(c);
}

const num = [2, 5, 7, 9, 12];
log(...num); //? заспредив массив передали его аргументом

const array = ['a', 'b'];
const newArray = [...array]; //? еще один способ копирования массива (поверхностная копия)
// console.log('🚀 ~ newArray', newArray);

const obj = {
  one: 1,
  two: 2
}

const newObj = { ...obj }; //? копирования ОБЪЕКТА (поверхностная копия)
// console.log('🚀 ~ newObj', newObj);

let str = 'some';
let strObj = new String(str);
// console.log('🚀 ~ str', typeof(str));
// console.log('🚀 ~ strObj', typeof(strObj));

// console.dir([1, 2, 3]);

const solder = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};
//? создаем новый объект Джон, который будет прототипно наследоваться от солдата,
//? бест-практис - создание объекта с привязкой к ранее созданному прототипу ->
const john = Object.create(solder);

// const john = {

//   health: 100
// };

// john.__proto__ = solder; //? назначили Джону прототип от солдата (устаревший вариант)
// Object.setPrototypeOf(john,solder); //? современный метод присваивания прототипов
// console.log('🚀 ~ john', john);
// console.log('🚀 ~ john.armor', john.armor); //? у Джона появилась броня от прототипа
// john.sayHello(); //? работает потому что у прототипа солдат есть такая функция



