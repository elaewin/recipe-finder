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
    edamamDataController.requestData()
    .then( function() {
      Recipe.all.forEach( function(data) {
        localStorage.recipeData.push(stringify(data))
      })
    }
<<<<<<< HEAD


  module.userProfileController = userProfileController;
=======
>>>>>>> 7eb1f907eee272c26d3e2712cfd166fab7f5e9ac
  }
  
  module.userProfileController = userProfileController;
})(window);
