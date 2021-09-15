"use strict";

const favicon = document.createElement('link');
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('href', 'icons/dopler.ico');
favicon.setAttribute('type', 'image/x-icon');
document.querySelector('head').append(favicon);

window.addEventListener('DOMContentLoaded', () => {
  const calc = require('./modules/calc'),
    cards = require('./modules/cards'),
    forms = require('./modules/forms'),
    modal = require('./modules/modal'),
    slider = require('./modules/slider'),
    tabs = require('./modules/tabs'),
    timer = require('./modules/timer');

  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();

});