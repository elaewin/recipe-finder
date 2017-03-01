'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  edamamDataController.getHTTPRequest = function() {
    // TODO: fill in placeholders
    return `https://api.edamam.com/search?q=${/*GET KEYWORDS FROM HTML*/}&app_id=${APP_ID}&app_key=${APP_KEY}&healthLabels=${/*GET HEALTH LABELS FROM HTML*/}&dietLabels=${/*GET DIET LABELS FROM HTML*/}`;
  }

  // TODO parse out HTTP request
  edamamDataController.requestData = function(callback) {
    $.get(edamamDataController.getHTTPRequest)
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
