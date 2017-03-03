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

  recipeController.renderAll = function(){
    console.log('Inside recipeController.renderAll');
    recipeView.index(Recipe.all);
    // Recipe.all.forEach(recipe => recipeView.render(recipe));
  }

  module.recipeController = recipeController;
})(window)
