'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  edamamDataController.requestData = function(callback) {
    $.get('https://api.edamam.com/search?q=chicken&app_id=8923b38a&app_key=9e829390b2e423e7cee9b5a57834d3ab')
    .then(data => console.log(data), err => console.error(err))
    .then(callback)
  }

  module.edamamDataController = edamamDataController;

})(window);
