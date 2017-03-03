'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = []; // will be JSON string with only the data we need

  // returns an HTTP request strings based on diet, health, and keyword arrays
  function getHTTPRequestString(dietArr, healthArr, keywordArr) {
    let searchString = '/edamam/search?q=';
    let keywordString = '';
    keywordArr.forEach(keyword => {keywordString += keyword + '+';});
    searchString += keywordString;
    console.log('added keywords', searchString);
    if (dietArr.length) {
      let dietString = `&diet=${dietArr[0]}`;
      searchString += dietString;
      console.log('added diet', searchString);
    }
    if (healthArr.length) {
      let healthString = `&health=${healthArr[0]}`;
      searchString += healthString;
      console.log('added health', searchString);
    }
    console.log('full string:', searchString);
    return searchString;
  }

  // invokes API request with user input
  edamamDataController.requestData = function() {
    $.get(getHTTPRequestString(UserProfile.diet, UserProfile.health, UserProfile.keyword))
    .then(results => {
      edamamDataController.all = results.hits;
      console.log(`Here's the raw JSON data:`, results);
      console.log(edamamDataController.all);
    },
      err => {
        console.error('status code: ' + err.status);
      }).then(function(){
        console.log('Recipe.all: ', Recipe.all);
      Recipe.loadAll();
      recipeView.index(Recipe.all);
    });
  }

  module.edamamDataController = edamamDataController;
})(window);
