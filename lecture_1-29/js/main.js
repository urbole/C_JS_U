"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    }
  },
  rememberMyFilms: function () {

    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("Насколько оцените его", "");

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('мало просмотренных фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
      console.log('вы классический зритель');
    } else if (personalMovieDB.count >= 50) {
      console.log("вы киноман");
    } else { console.log('error'); }
  },
  showMyDB: function (hidden) {

    if (!hidden) {
      console.log(personalMovieDB);
    }
    // !hidden ? console.log(personalMovieDB) : console.log("DB is private");
  },
  toggleVisibleMyDB: function () {
    // personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: function () {

    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');

      if (genre != null && genre != '') {
        personalMovieDB.genres[i - 1] = genre;
      } else {
        alert('wrong');
        i--;
      }
    }

    personalMovieDB.genres.forEach((genre, key) => {
      console.log(`Любимый жанр № ${key + 1} - это ${genre}`);
    });
  },
};

// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.hidden);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.hidden);

const box = document.querySelector('#box'),
  buttons = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),
  oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: red; width: 100px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => item.style.backgroundColor = 'blue');

const div = document.createElement('div');
// const text = document.createTextNode('bla-bla-bla');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); //? устаревшее

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); //? устаревшее

// circles[0].remove();
// wrapper.removeChild(hearts[1]); //? устаревшее

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0],hearts[0]); //? устаревшее

div.innerHTML = '<h4>Hello World</h4>'; //? вставка верстки, не для вставки текста от пользователя
// div.textContent='Hello World'; //? вставка текста и для вставки текста от пользователя

div.insertAdjacentHTML('afterend', '<h3>Hello!</h3>');