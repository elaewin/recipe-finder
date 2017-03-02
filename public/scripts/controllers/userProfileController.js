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
      });
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD


  module.userProfileController = userProfileController;
=======
>>>>>>> 7eb1f907eee272c26d3e2712cfd166fab7f5e9ac
>>>>>>> 72c2d99eb6daca5ddccca101d0d58ddd8f4772f6
  }

  module.userProfileController = userProfileController;
})(window);
