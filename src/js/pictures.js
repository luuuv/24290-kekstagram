'use strict';
var loadPictures = require('./loader');
var getPictureElement = require('./get-picture-element');
var Gallery = require('./gallery');
var urlToLoad = 'http://localhost:1507/api/pictures';
var filterBlock = document.querySelector('.filters');
var container = document.querySelector('.pictures');

filterBlock.classList.add('hidden');

var Picture = function(picture, index) {
  this.data = picture;
  this.element = getPictureElement(picture);
  this.index = index;
  var self = this;

  this.element.onclick = function(event) {
    event.preventDefault();
    gallery.show(self.index);
  };
  gallery.closeElement.onclick = function(event) {
    event.preventDefault();
    gallery.hide();
  };
  gallery.galleryElement.onclick = function(event) {
    event.preventDefault();
    if((gallery.activePicture + 1) === gallery.pictures.length) {
      gallery.setActivePicture(0);
    } else {
      gallery.setActivePicture(gallery.activePicture + 1);
    }
  };

};

var gallery = new Gallery();

var renderPictures = function(picArray) {
  picArray.forEach(function(picture, index) {
    var pic = new Picture(picture, index);
    container.appendChild(pic.element);
  });
  filterBlock.classList.remove('hidden');
  gallery.pictures = picArray;
};

loadPictures(urlToLoad, renderPictures);
