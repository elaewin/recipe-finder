'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  edamamDataController.getHTTPRequest = function() {
    // TODO: fill in placeholders
    var httpRequest = `https://api.edamam.com/search?q=${/*GET KEYWORDS FROM HTML*/}&app_id=${APP_ID}&app_key=${APP_KEY}&healthLabels=${/*GET HEALTH LABELS FROM HTML*/}&dietLabels=${/*GET DIET LABELS FROM HTML*/}`;
  }

  // TODO parse out HTTP request
  edamamDataController.requestData = function(callback) {
    $.get('https://api.edamam.com/search?q=chicken&app_id=8923b38a&app_key=9e829390b2e423e7cee9b5a57834d3ab')
    .then(
      function(data) {
        edamamDataController.all = data.hits;
        console.log(data);
      },
      function(err) {
        console.error(err);
      })
      .then(callback);
  }

  module.edamamDataController = edamamDataController;


})(window);
