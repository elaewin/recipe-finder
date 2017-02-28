'use strict';

// input would be the recipe object that contain all recipe gathered from the API as a result of the user query
// output would be displaying the result on the page under recipe-template handlebar.
//

(function (module) {
  var recipeView = {};

  recipeView.initRecipePage = function() {
    $('.class').hide(); // hide other div tags which needs to be hidden
    $('#id').show(); // reveal the div tag that will be appended by the handlebar
    $('#id').on('focus', function(){
      this.select();
    });  // if a recipe is on focus then highlight it.
  };

  // assuming the resulting recipes will be put in an object with properties of 'name' and 'imageLink'
  recipeView.create = function() {
    var recipe = localStorage.rawData;
    $('#id').empty(); // this id belongs to the div that will contain the new result and empty it.
    recipe.forEach(r => $('#recipe').append(r.toHtml()); // this id belongs to the div that will contain the new result
    recipeView.initRecipePage();
  };

  recipeView.toHtml = function() {
   var source = $('#recipe-template').html();
   var template = Handlebars.compile(source);
   return template(this);
  };

  module.recipeView = recipeView;
})(window)
