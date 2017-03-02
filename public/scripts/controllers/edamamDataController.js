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

  // TODO parse out HTTP request
  edamamDataController.requestData = function() {
    let dietArr = ['low-carb'];
    let healthArr = ['vegan'];
    let keywordArr = ['chicken', 'basil'];
    $.get(getHTTPRequestString(dietArr, healthArr, keywordArr)) // TODO: place concatenated HTTP request here
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
