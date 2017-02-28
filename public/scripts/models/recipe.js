'use strict';

function Recipe(obj) {
  label: obj.label;
  image: obj.image;
  url: obj.url;
}

recipe.all = [];

Recipe.loadAll = rows => {
  recipe.all = rows.map(ele => new Recipe(ele));
};

Recipe.fetchAll = callback => {
//TODO: fix foo data here
  $.get('/foo')
  .then(
    results => {
      if (results.length) {
        recipe.loadAll(results);
        callback();
      } else {
// TODO: fix this fall-back after we decide on a behaviour for this
        // $.getJSON(localStorage.recipe)
        // .then(rawData => {
        //   rawData.forEach(item => {
        //     let recipe = new recipe(item);
        //     recipe.insertRecord();
          })
        })
        .then(() => recipe.fetchAll(callback))
        .catch(console.error);
      }
    }
  )
};


  module.Recipe = Recipe;
})(window);
