'use strict';

var renderPictures = function(picArray) {
  picArray.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filterBlock.classList.remove('hidden');
};
