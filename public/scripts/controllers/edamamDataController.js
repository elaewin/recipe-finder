'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = []; // will be JSON string with only the data we need

  // returns an HTTP request strings based on diet, health, and keyword arrays
  function getHTTPRequestString(dietArr, healthArr, keywordArr) {
    var keywordString = '';
    keywordArr.forEach(keyword => {keywordString += keyword + '+';});
    return `/edamam/search?q=${keywordString}&diet=${dietArr[0]}&health=${healthArr[0]}&from=0&to=5`;
  }

  // invokes API request with user input
  edamamDataController.requestData = function() {
    $.get(getHTTPRequestString(UserProfile.diet, UserProfile.health, UserProfile.keyword))
    .then(results => {
      edamamDataController.all = results.hits;
      console.log(`Here's the raw JSON data: `);
      console.log(edamamDataController.all);
    },
      err => {
        console.error('status code: ' + err.status);
      });
  }
  edamamDataController.requestData();

  module.edamamDataController = edamamDataController;
})(window);
