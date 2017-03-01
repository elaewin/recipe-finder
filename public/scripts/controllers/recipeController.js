'use strict';

(function(module){
  const recipeController = {};
//
//   //sync the url
//   recipeController.index = (ctx) => recipeView.index(ctx.recipe);
//
//   //middleware for showing a single, complete recipe.
//   recipeController.loadFullRecipe = (ctx, next) => {
//     let recipeData = recipe => {
//       ctx.recipe = recipe;
//       next();
//     };
//
//     //TODO: replace foo placeholders with real dbid's
//     Recipe.findwhere('foo_id', ctx.params.foo_id, recipeData);
//   };
//
//   // Load all recipes
//   recipeController.loadAll = (ctx, next) => {
//     let recipeData = () => {
//       ctx.recipe = Recipe.all;
//       next();
//     };
//
//     if (Recipe.all.length) {
//       ctx.recipe = Recipe.all;
//       next();
//     } else {
//       Recipe.fetchAll(recipeData);
//     }
//   };
//
  

  module.recipeController = recipeController;
})(window)
