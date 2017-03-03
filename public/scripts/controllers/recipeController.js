'use strict';

(function(module){
  const recipeController = {};

  // adds recipes in Recipe.all to localStorage.recipeData. Returns true if successful.
  recipeController.addRecipesToLocalStorage = () => {
    if (Recipe.all.length > 0) {
      localStorage.setItem('recipeData', JSON.stringify(Recipe.all));
      return true;
    }
    return false;
  }

  recipeController.loadAll = function(){
    console.log('Inside recipeController.loadAll');
  }

  module.recipeController = recipeController;
})(window)
