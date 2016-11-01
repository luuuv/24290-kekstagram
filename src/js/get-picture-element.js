'use strict';
var template = document.querySelector('#picture-template');
var templateContainer = 'content' in template ? template.content : template;
var pictureElementNode = templateContainer.querySelector('.picture');
var pictureSide = '182';

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

module.exports = getPictureElement;
