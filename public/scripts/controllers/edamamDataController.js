'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = []; // will be JSON string with only the data we need

  // TODO parse out HTTP request
  edamamDataController.requestData = function() {
    $.get('/edamam/search?q=basil+chicken&from=0&to=5') // TODO: place concatenated HTTP request here
    .then(results => {
      edamamDataController.all = results.hits;
      console.log(edamamDataController.all);
    },
      err => {
        console.error('status code: ' + err.status);
      });
  }
  edamamDataController.requestData();

  module.edamamDataController = edamamDataController;
})(window);
