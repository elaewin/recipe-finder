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
  // localStorage.rawData.push(edamamDataController.all[edamamDataController.all.indexOf($(‘q’) + 1]);
  // localStorage.rawData.push(edamamDataController.all[edamamDataController.all.indexOf($(‘url’) + 1]);
  // localStorage.rawData.push(edamamDataController.all[edamamDataController.all.indexOf($(‘image’) + 1]);
};

// Recipe.fetchAll = callback => {
// //TODO: fix foo data here
//   $.get('/foo')
//   .then(
//     results => {
//       if (results.length) {
//         Recipe.loadAll(results);
//         callback();
//       } else {
// // TODO: fix this fall-back after we decide on a behaviour for this
//         $.ajax({
//           url: '',
//           method: 'GET',
//
//         })
//         // $.getJSON(localStorage.rawData)
//         // .then(rawData => {
//         //   rawData.forEach(item => {
//         //     let recipe = new Recipe(item);
//         //     recipe.insertRecord();
//           })
//         }
//         .then(() => Recipe.fetchAll(callback))
//         .catch(console.error);
//       }
//     }
//   )
// };


  module.Recipe = Recipe;
})(window);
