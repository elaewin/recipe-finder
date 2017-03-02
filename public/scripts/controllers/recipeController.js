'use strict';

(function(module){
  const recipeController = {};

  // adds recipes in Recipe.all to localStorage.recipeData. Returns true if successful.
  recipeController.addRecipesToLocalStorage = () => {
    if (Recipe.all.length > 0) {
      localStorage.setItem('recipeData', Recipe.all);
      return true;
    }
    return false;
  }

  module.recipeController = recipeController;
})(window)
