'use strict';

// input would be the recipe object that contain all recipe gathered from the API as a result of the user query
// output would be displaying the result on the page under recipe-template handlebar.
//

(function (module) {
  const recipeView = {};

  const render = function(recipe) {
    let template - Handlebars.compile($('#recipe-template'),text());

    return template(recipe);
  }

// this should replace the .toHTML method and append our recipies to the #recipe article element via Handlebars template.
  recipeView.index = function(recipe) {
    // TODO: fix foo class once index is finished fleshing out
    $('.foo').hide(); // hide other div tags which needs to be hidden
    $('#recipe').show(); // reveal the div tag that will be appended by the handlebars template
    $('#recipe article').remove();
    recipe.forEach(a => $('#recipe').append(render(a)));
};

  module.recipeView = recipeView;
})(window)
