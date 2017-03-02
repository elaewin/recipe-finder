'use strict';

(function(module) {
  const userProfileControler = {};

  userProfileController.checkLocalStorage = function() {
    if (localStorage.recipeData) {
      return true;
    }
    return false;
  }

  // place previous results into Recipe.all for use in the View
  userProfileController.fetchPreviousResults = function() {
    $.getJSON(localStorage.recipeData)
    .then(recipeData => {
      recipeData.forEach(recipe => {
        Recipe.all.push(JSON.parse(new Recipe(recipe)));
      });
    })
  }

  // create a new API request and place data into Recipe.all
  userProfileController.fetchNewResults = function() {
    localStorage.clear();
    // TODO: parse raw JSON data and grab only the data we need

    edamamDataController.requestData()
    .then( function() {
      Recipe.all.forEach( function(data) {
        localStorage.recipeData.push(stringify(data))
      })
    }
  }

  module.userProfileController = userProfileController;
})(window);
