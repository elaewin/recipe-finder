'use strict';

(function(module) {
  const edamamDataController = {};
  edamamDataController.all = [];

  edamamDataController.getHTTPRequest = function() {
    // TODO: fill in placeholders
    return `https://api.edamam.com/search?q=${/*GET KEYWORDS FROM HTML*/}&app_id=${APP_ID}&app_key=${APP_KEY}&healthLabels=${/*GET HEALTH LABELS FROM HTML*/}&dietLabels=${/*GET DIET LABELS FROM HTML*/}`;
  }

  // TODO parse out HTTP request
  edamamDataController.requestData = function() {
    $.get(edamamDataController.getHTTPRequest) //()??
    .then(
      function(results) {
        results.hits.forEach(function(element) {
          let newRecipe = new Recipe();
          newRecipe.label = element.recipe.label;
          newRecipe.image = element.recipe.image;
          newRecipe.url = element.recipe.url;
          Recipe.all.push(newRecipe);
        })
      },
      function(err) {
        console.error(err);
      });
  }

  module.edamamDataController = edamamDataController;


})(window);
