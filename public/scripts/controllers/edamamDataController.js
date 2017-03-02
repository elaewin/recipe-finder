'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  // edamamDataController.getHTTPRequest = function() {
  //   // TODO: fill in placeholders
  //   return `https://api.edamam.com/search?q=${/*GET KEYWORDS FROM HTML*/}&app_id=${APP_ID}&app_key=${APP_KEY}&healthLabels=${/*GET HEALTH LABELS FROM HTML*/}&dietLabels=${/*GET DIET LABELS FROM HTML*/}`;
  // }
  // WORKING CODE !!!!
//   $.get('/edamam/search?q=shrimp')
// .then(data => {
//   console.log(data.hits);
//   // data.forEach(nom => $('#results').append(`<p>${nom.name}</p>`));
// },
//   err => {
//     console.error('Status Code: ', err.status);
//   });
  /////////////////////

  // TODO parse out HTTP request
  edamamDataController.requestData = function() {
    $.get('/edamam/search?q=chicken')
    .then(results => {
        console.log(results.hits);
        // results.hits.forEach(function(element) {
          // let newRecipe = new Recipe();
          // newRecipe.label = element.recipe.label;
          // newRecipe.image = element.recipe.image;
          // newRecipe.url = element.recipe.url;
          // Recipe.all.push(newRecipe);
        // })
      },
      err => {
        console.error('status code: ' + err.status);
      });
  }
  // edamamDataController.requestData();

  module.edamamDataController = edamamDataController;
})(window);
