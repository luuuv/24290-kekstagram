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

  this.closeElemEventListenerFunc = this.hide.bind(myself);
  this.closeElement.addEventListener('click', this.closeElemEventListenerFunc);

  this.photoElemEventListenerFunc = function() {
    if(myself.activePicture === myself.pictures.length - 1) {
      myself.setActivePicture(0);
    } else {
      myself.setActivePicture(myself.activePicture + 1);
    }
  };
  this.photo.addEventListener('click', this.photoElemEventListenerFunc);
};
Gallery.prototype.hide = function() {
  this.galleryElement.classList.add('invisible');
  this.closeElement.removeEventListener('click', this.closeElemEventListenerFunc);
  this.photo.removeEventListener('click', this.photoElemEventListenerFunc);
};
Gallery.prototype.setActivePicture = function(numPicShown) {
  this.activePicture = numPicShown;
  this.photo.src = this.pictures[numPicShown].url;
  this.galleryElement.querySelector('.comments-count').innerHTML = this.pictures[numPicShown].comments;
  this.galleryElement.querySelector('.likes-count').innerHTML = this.pictures[numPicShown].likes;
};

module.exports = Gallery;
