'use strict';

var urlToLoad = 'http://localhost:1507/api/pictures';
var filterBlock = document.querySelector('.filters');
var container = document.querySelector('.pictures');
var template = document.querySelector('#picture-template');
var templateContainer = 'content' in template ? template.content : template;
var pictureElementNode = templateContainer.querySelector('.picture');
var pictureSide = '182';

filterBlock.classList.add('hidden');

var getPictureElement = function(picture) {
  var pictureElement = pictureElementNode.cloneNode(true);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;

  var backgroundImage = new Image();

  backgroundImage.onload = function(event) {
    var picElemImage = pictureElement.querySelector('img');
    picElemImage.src = event.target.src;
    picElemImage.width = pictureSide;
    picElemImage.height = pictureSide;
  };
  backgroundImage.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  backgroundImage.src = picture.url;
  return pictureElement;
};

var loadPictures = function(url) {
  window.MyCallbackFunc = function(data) {
    renderPictures(data);
    script.remove();
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + 'MyCallbackFunc';
  script.classList.add('loader');
  document.body.appendChild(script);
};

var renderPictures = function(picArray) {
  picArray.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
  filterBlock.classList.remove('hidden');
};

loadPictures(urlToLoad);
