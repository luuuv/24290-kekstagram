'use strict';
var loadPictures = require('./loader');
var getPictureElement = require('./get-picture-element');
var urlToLoad = 'http://localhost:1507/api/pictures';
var filterBlock = document.querySelector('.filters');
var container = document.querySelector('.pictures');

filterBlock.classList.add('hidden');

var renderPictures = function(picArray) {
  picArray.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filterBlock.classList.remove('hidden');
};

loadPictures(urlToLoad, renderPictures);
