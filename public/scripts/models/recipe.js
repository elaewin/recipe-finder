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
  Recipe.all = edamamDataController.all.map(ele => new Recipe(ele));
};

  Recipe.fetchAll = callback => {
  // //TODO: fix foo data here
  //   $.get('/foo')
  //   .then(
  //     results => {
  //       if (results.length) {
  //         Recipe.loadAll();
  //         localStorage.rawData.push(results);
  //         callback();
  //       } else {
  // // TODO: fix this fall-back after we decide on a behaviour for this
  //         $.getJSON(localStorage.rawData)
  //         .then(rawData => {
  //           rawData.forEach(item => {
  //             let recipe = new Recipe(item);
  //             Recipe.all.push(JSON.parse(recipe));
  //           })
  //         .then(() => Recipe.fetchAll(callback))
  //         .catch(console.error);
  //       }
  //     }
  //   )
    // input : JSON data,
    //    currentUserProfile compared to  previousUserProfile
    //    currentRecipe compared to previousRecipe
    // output: recipe.all - it pushes recipe objects into "all"
    //   localStorage.previousRecipe - will serve as a comparison objects, set to current at end
    //   localStorage.currentRecipes - will be built from the API reponse / previousRecipe
    //   localStorage.previousUserProfile - will be set to currentUserProfile at end.


    if (localStorage.previousUserProfile) {
      // ask user if they want to use it or not
      // store user response in a variable
    } else {
      // build a currentUserProfile
    }

  };




  module.Recipe = Recipe;
})(window);
