'use strict';

(function(module){
function Recipe(obj) {
  this.label = obj.recipe.label;
  this.image = obj.recipe.image;
  this.url = obj.recipe.url;
}

Recipe.all = [];

Recipe.loadAll = () => {
  Recipe.all = edamamDataController.all.map(ele => new Recipe(ele));
};

Recipe.fetchAll = callback => {
//TODO: fix foo data here
  $.get('/foo')
  .then(results => {
      if (results.length) {
        Recipe.loadAll();
        localStorage.rawData.push(results);
        callback();
      } else {
// TODO: fix this fall-back after we decide on a behaviour for this
        $.getJSON(localStorage.rawData)
        .then(rawData => {
          rawData.forEach(item => {
            let recipe = new Recipe(item);
            Recipe.all.push(JSON.parse(recipe));
          })
        .then(() => Recipe.fetchAll(callback))
        .catch(console.error);
      })
    }
})}


  module.Recipe = Recipe;
})(window);
