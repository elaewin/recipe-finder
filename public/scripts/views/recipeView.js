'use strict';

// input would be the recipe object that contain all recipe gathered from the API as a result of the user query
// output would be displaying the result on the page under recipe-template handlebar.
//

(function (module) {
  const recipeView = {};

  const render = function(recipe) {
    let template = Handlebars.compile($('#recipe-template').text());
    let context  = {
      label: recipe.label,
      image: recipe.image,
      url: recipe.url
    };
    return template(context);
  }

// TODO: Not getting called anywhere.
// this should replace the .toHTML method and append our recipies to the #recipe article element via Handlebars template.
  recipeView.index = function(recipe) {
    $('main section').hide(); // hide other div tags which needs to be hidden
    $('#recipe-article').remove();
    recipe.forEach(a => $('#recipe').append(render(a)));
    $('#recipe').show(); // reveal the div tag that have been appended by the handlebars template
};

  module.recipeView = recipeView;
})(window)
