'use strict';

var loadPictures = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'mcb' + Date.now();
  }
  window[callbackName] = function(dataFromServer) {
    callback(dataFromServer);
    script.remove();
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

module.exports = loadPictures;
