'use strict';
//! 51
// const persona = {
//   name: 'Bohdan',
//   tel: '+380960242713',
//   parents: {
//     mom: 'Lidia',
//     dad: 'Leonid'
//   }
// };

// const clone = JSON.parse(JSON.stringify(persona));
// clone.parents.mom = 'Lilia';

// console.log(persona);
// console.log(clone);

//! 52

const inputRub = document.querySelector('#rub'),
  inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //? request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');
  request.setRequestHeader("Content-type", 'application/json; charset=utf-8');
  request.send();

  //? status - код состояния(ошибки); 200, 404, 502, ...,
  //? statusText - текстовое описание кода состояния status
  //? response - ответ от сервера
  //? reAdyState - текущее состояние нашего запроса от 
  //?   0 - UNSENT Объект был создан. Метод open() еще не вызывался
  //?   1 - OPENED Метод open() бфл вызван
  //?   2 - HEADERS_RECEIVED Метод open(), доступны заголовки (headers) и статус
  //?   3 - LOADING Загрузка; responseText содержит чистые данные
  //?   4 - DONE Операция успешно завершена

  // request.addEventListener('readystatechange', () => {
  //   //? 'readystatechange' будет срабатывать при смене состояния reAdyState 0-4

  //   if (request.readyState === 4 && request.status === 200) {
  //     // console.log(request.response);
  //     const data = JSON.parse(request.response);
  //     inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
  //   } else {
  //     inputUsd.value = "Что-то пошло не так";
  //   }
  // });
  request.addEventListener('load', () => {
    //! 'load' сработает при четвертом состоянии reAdyState (4 - DONE)

    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });
});