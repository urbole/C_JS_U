const numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const firstFilm = prompt("Один из последних просмотренных фильмов", ""),
  firstRate = prompt("Насколько оцените его", ""),
  secondFilm = prompt("Один из последних просмотренных фильмов", ""),
  secondRate = prompt("Насколько оцените его", "");

personalMovieDB.movies[firstFilm] = firstRate;
personalMovieDB.movies[secondFilm] = secondRate;


console.log('🚀 ~ personalMovieDB', personalMovieDB); 
