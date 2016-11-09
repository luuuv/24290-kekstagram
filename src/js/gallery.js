'use strict';

var Gallery = function(picturesArray, activePic) {
  this.pictures = picturesArray;
  this.activePicture = activePic;
  this.galleryElement = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.photo = document.querySelector('.gallery-overlay-image');
};

Gallery.prototype.setPictures = function(picArr) {
  this.pictures = picArr;
};
Gallery.prototype.show = function(numPicShown) {
  this.galleryElement.classList.remove('invisible');
  this.setActivePicture(numPicShown);
  var myself = this;
  console.log(myself);
  this.closeElement.addEventListener('click', this.hide.bind(myself));
};
Gallery.prototype.hide = function() {
  //console.log(event.target.parentElement);
  this.galleryElement.classList.add('invisible');
  //как удалить этот eventLitener ? который ставится в методе show
  //this.removeEventListener('click');
};
Gallery.prototype.setActivePicture = function(numPicShown) {
  this.activePicture = numPicShown;
  this.photo.src = this.pictures[numPicShown].url;
  this.galleryElement.querySelector('.comments-count').innerHTML = this.pictures[numPicShown].comments;
  this.galleryElement.querySelector('.likes-count').innerHTML = this.pictures[numPicShown].likes;
};

module.exports = Gallery;
