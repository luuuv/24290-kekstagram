'use strict';
(function() {

  var urlToLoad = 'http://localhost:1507/api/pictures';
  var filterBlock = document.querySelector('.filters');
  var container = document.querySelector('.pictures');

  filterBlock.classList.add('hidden');

  var getPictureElement = require('./get-picture-element');

  var renderPictures = function(picArray) {
    picArray.forEach(function(picture) {
      container.appendChild(getPictureElement(picture));
    });
    filterBlock.classList.remove('hidden');
  };

  var loadPictures = require('./loader');

  loadPictures(urlToLoad, renderPictures);

})();
