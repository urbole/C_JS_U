"use strict";

//* new RegExp('pattern', 'flags');
//* /pattern/flags флаги можно комбинировать (/n/gim)? последовательность не имеет значения
//* i -  поиск вне зависимости от регистра;
//* g -  глобал ищет несколько вхождений, не работает с методом search()
//* m -  включает многострочный режим;

// const ans = prompt('Введите ваше имя','');
// const reg = /n/i;
// console.log(ans.search(reg)); //* search() возвращает индекс первого вхождения
// console.log(ans.match(reg)); //* возвращает масив ['n', index: 1, input: 'ann', groups: undefined]


// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*')); //* точка как * в сss, выбирает все, заменит все символы на звездочки
// console.log(pass.replace(/\./g, '*')); //* что бы найти именно точку, ее нужно экранировать
// console.log('12-34-56'.replace(/-/g, ':'));


// const ans = prompt('Введите ваше имя','');
// const reg = /n/ig;
// console.log(reg.test(ans)); //* возвращает булиновое значение - есть или нету "такого" в строке

//! классы в регулярных выражениях
//* \d все цифры
//* \w все слова, все буквы
//* \s все пробелы

// const ans = prompt('Введите ваше число', 2324);
// const reg = /\d/g;
// console.log(ans.match(reg));

// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i)); //* комбинирование шаблонов

//! обратные классы
//* \D не цифры
//* \W не буквы

const str = 'My name is R2D2';
console.log(str.match(/\W/gi)); //* не буквы
console.log(str.match(/\D/gi)); //* не цифры
