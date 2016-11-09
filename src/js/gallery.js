'use strict';

var Gallery = function(picturesArray, activePic) {
  this.pictures = picturesArray;
  this.activePicture = activePic;
  this.galleryElement = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.photo = document.querySelector('.gallery-overlay-image');
  Gallery.prototype.myself = this;
};

Gallery.prototype.setPictures = function(picArr) {
  this.pictures = picArr;
};
Gallery.prototype.show = function(numPicShown) {
  this.galleryElement.classList.remove('invisible');
  this.setActivePicture(numPicShown);
  this.closeElement.addEventListener('click', this.hide);
// Что тут происходит вообще?! :))
  console.log(this);
  console.log(Gallery.prototype.myself);
  this.photo.addEventListener('click', this.setActivePicture(numPicShown + 1));
  //debugger;
  //???? Вопрос: Почему здесь не работает addEventListener ? а onclick работает. при этом у них разные event.target
  // но при этом, onclick не видит нормально setActivePicture
  // this.photo.onclick = function() {
  //   console.log('blabla');
  //   Gallery.prototype.setActivePicture(numPicShown + 1);
  // };
  //debugger;
};
Gallery.prototype.hide = function() {
  Gallery.prototype.myself.galleryElement.classList.add('invisible');
};
Gallery.prototype.setActivePicture = function(numPicShown) {
  // console.log(this);
  // console.log(Gallery.prototype.myself);
  Gallery.prototype.myself.activePicture = numPicShown;
  Gallery.prototype.myself.photo.src = Gallery.prototype.myself.pictures[numPicShown].url;
  Gallery.prototype.myself.galleryElement.querySelector('.comments-count').innerHTML = Gallery.prototype.myself.pictures[numPicShown].comments;
  Gallery.prototype.myself.galleryElement.querySelector('.likes-count').innerHTML = Gallery.prototype.myself.pictures[numPicShown].likes;
};

module.exports = Gallery;
