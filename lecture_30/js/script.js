'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

//? 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// document.querySelector('.promo__adv').remove(); //! мое решение
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => item.remove());

//? 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__genre').textContent = 'драма'; //! мое решение

//? 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//? Реализовать только при помощи JS
// document.querySelector('.promo__bg').style.cssText = 'background-image: url(../img/bg.jpg)'; //! мое решение
document.querySelector('.promo__bg').style.backgroundImage = "url(./img/bg.jpg)";

//? 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//? Отсортировать их по алфавиту 
//? 5) Добавить нумерацию выведенных фильмов
// const films = document.getElementsByClassName('promo__interactive-item'); //! мое решение
// const setNewList = () => {
// 	movieDB.movies.sort().forEach((item, i) => {
// 		const newItem = document.createElement('li');
// 		newItem.classList.add('promo__interactive-item');
// 		newItem.insertAdjacentHTML('afterbegin', `${i + 1} ${item}<div class="delete"></div>`);
// 		films[i].replaceWith(newItem);
// 	});
// };
// setNewList();
const moveList = document.querySelector('.promo__interactive-list');
moveList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => moveList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${item}
		<div class="delete"></div>
	</li>
`);


