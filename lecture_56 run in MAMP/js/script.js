"use strict";

const favicon = document.createElement('link');
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('href', 'icons/dopler.ico');
favicon.setAttribute('type', 'image/x-icon');
document.querySelector('head').append(favicon);

window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => item.classList.remove('tabheader__item_active'));
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //! Timer

  const deadLine = '2021-10-2';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      // const t = Date.parse(endtime) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadLine);

  //! Modal


  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
  // modalCloseBtn = document.querySelector('[data-close]'); //? не будет работать на динамически созданных элементах

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach(btn => btn.addEventListener('click', openModal));

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  // modalCloseBtn.addEventListener('click', closeModal); //? ... (не будет работать на динамически созданных элементах)

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.
      documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  //! Cards

  const menuField = document.querySelector('.menu__field'),
    menuItem = menuField.querySelectorAll('.menu__item');
  // menuField.innerHTML = '';
  // menuItem.forEach(item => item.innerHTML='');

  class MenuCard {
    constructor(src, alt, title, desc, price, parentSelector) {
      this.srs = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.srs} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.desc}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'

  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container'

  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container'

  ).render();

  //! Forms - XMLHttpRequest FormData  >>>>>>>>>>>>>>>>>>>
  // const forms = document.querySelectorAll('form');
  // const message = {
  //   loading: "Загрузка",
  //   success: "Спасибо, скоро мы с вами свяжемся",
  //   failure: "Что-то пошло не так...",
  // };

  // forms.forEach(item => postData(item));

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');
  //     statusMessage.textContent = message.loading;
  //     form.append(statusMessage);

  //     const request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');

  //     //? request.setRequestHeader("Content-type", 'multipart/form-data'); 
  //     //? для данных в виде FormData задавать заголовки не нужно
  //     const formData = new FormData(form);

  //     request.send(formData);

  //     request.addEventListener('load', () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         statusMessage.textContent = message.success;
  //         form.reset(); //? или перебрать input-ы и почистить им value
  //         setTimeout(() => statusMessage.remove(), 1000);
  //       } else {
  //         console.log('error');
  //         statusMessage.textContent = message.failure;
  //       }
  //     });
  //   });
  // }

  //! Forms -  fetch() FormData >>>>>>>>>>>>>>>>>>>
  // const forms = document.querySelectorAll('form');
  // const message = {
  //   loading: "img/form/spinner.svg",
  //   success: "Спасибо, скоро мы с вами свяжемся",
  //   failure: "Что-то пошло не так...",
  // };

  // forms.forEach(item => postData(item));

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const statusMessage = document.createElement('img');
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //       display: block;
  //       margin: 0 auto;        
  //     `; //? но лучше создать класс в css и тут его назначать
  //     // form.append(statusMessage);
  //     form.insertAdjacentElement('afterend', statusMessage); //? так лучше

  //     const formData = new FormData(form);

  //     // const object = {};
  //     // formData.forEach((value, key) => object[key] = value);

  //     // const json = JSON.stringify(object);

  //     fetch('server.php', {
  //       method: "POST",
  //       // headers: {
  //       //   "Content-type": 'application/json'
  //       // },
  //       body: formData
  //     })
  //       .then(data => data.text())
  //       .then(data => {
  //         console.log(data);
  //         showThanksModal(message.success);
  //         //? или перебрать input-ы и почистить им value
  //         statusMessage.remove();
  //       })
  //       .catch(() => {
  //         showThanksModal(message.failure)
  //       })
  //       .finally(() => {
  //         form.reset();
  //       });
  //   });
  // }
  //! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


  //! Forms - JSON! >>>>>>>>>>>>>>>>>>>>>>>>>>
  // const forms = document.querySelectorAll('form'); //! Forms - JSON
  // const message = {
  //   loading: "img/form/spinner.svg",
  //   success: "Спасибо, скоро мы с вами свяжемся",
  //   failure: "Что-то пошло не так...",
  // };

  // forms.forEach(item => postData(item));

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const statusMessage = document.createElement('img');
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //       display: block;
  //       margin: 0 auto;        
  //     `; //? но лучше создать класс в css и тут его назначать
  //     // form.append(statusMessage);
  //     form.insertAdjacentElement('afterend', statusMessage); //? так лучше

  //     const request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');

  //     request.setRequestHeader("Content-type", 'aplicatuion/json');
  //     //? для данных в виде JSON задавать заголовки нужно
  //     const formData = new FormData(form);

  //     const object = {};
  //     formData.forEach((value, key) => object[key] = value);

  //     const json = JSON.stringify(object);

  //     request.send(json);

  //     request.addEventListener('load', () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         showThanksModal(message.success);
  //         form.reset();                    //? или перебрать input-ы и почистить им value
  //         statusMessage.remove();
  //       } else {
  //         showThanksModal(message.failure);
  //       }
  //     });
  //   });
  // }


  //! Forms - fetch() JSON! >>>>>>>>>>>>>>>>>>>>>>>>>>
  const forms = document.querySelectorAll('form'); //! Forms - fetch() JSON
  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо, скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach(item => postData(item));

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;        
      `; //? но лучше создать класс в css и тут его назначать
      //* form.append(statusMessage);
      form.insertAdjacentElement('afterend', statusMessage); //? так лучше

      const formData = new FormData(form);

      const object = {};
      formData.forEach((value, key) => object[key] = value);



      fetch('server.php', {
        method: "POST",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify(object)
      })
        .then(data => data.text())
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }



  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');

    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: "POST",
  //   body: JSON.stringify({ name: "Alex" }),
  //   headers: {
  //     "Content-type": "application/json"
  //   }
  // })
  //   .then(response => response.json())
  //   .then(json => console.log(json));
});