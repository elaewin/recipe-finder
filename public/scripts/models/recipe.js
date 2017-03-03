'use strict';
// UserProfile health, diet, keywords
// previousUserProfile and currentUserProfile is of type UserProfile

(function(module){
  function Recipe(obj) {
    this.label = obj.recipe.label;
    this.image = obj.recipe.image;
    this.url = obj.recipe.url;
  }

Recipe.all = [];

Recipe.loadAll = () => {
  console.log('this is edemamDataController.all logged from Recipe.loadAll:', edamamDataController.all);
  Recipe.all = edamamDataController.all.map(ele => new Recipe(ele));
};


Recipe.fetchAll = callback => {
  if (localStorage.recipeData) {
    Recipe.all = JSON.parse(localStorage.getItem('recipeData'));
    callback(Recipe.all);
  } else {
    Recipe.loadAll();
    localStorage.setItem('recipeData', JSON.stringify(Recipe.all));
  }
};

  module.Recipe = Recipe;
})(window);
