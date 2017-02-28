'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  // JUST TESTING STUFF...
  $.get('https://api.edamam.com/search?q=chicken&from=0&to=5&app_id=8923b38a&app_key=9e829390b2e423e7cee9b5a57834d3ab')
  .then(data => console.log(data));

  // TODO parse out HTTP request
  edamamDataController.requestData = function(callback) {
    $.get('https://api.edamam.com/search?q=chicken&app_id=8923b38a&app_key=9e829390b2e423e7cee9b5a57834d3ab')
    .then(
      function(data) {
        edamamDataController.all = data;
        console.log(data);
      },
      function(err) {
        console.error(err);
      })
      .then(callback);
  }

  module.edamamDataController = edamamDataController;

})(window);
