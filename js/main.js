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
  }, showMyDB: function (hidden) {

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

const box = document.querySelector('#box');
console.log('🚀 ~ box', box);

const buttons = document.getElementsByTagName('button');
console.log('🚀 ~ buttons', buttons[0]);

const circles = document.getElementsByClassName('circle');
console.log('🚀 ~ circles', circles[1]);