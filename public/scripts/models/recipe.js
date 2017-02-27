'use strict';

function recipe(obj) {
  label: obj.label;
  image: obj.image;
  url: obj.url;
}
//
// recipe.all = [];
//
// recipe.prototype.toHtml = function() {
//   var template = Handlebars.compile($('#recipe-template').text());
//   this.body = marked(this.body);
//   return template(this);
// };
//
//
// recipe.loadAll = rows => {
//   recipe.all = rows.map(ele => new recipe(ele));
// };
//
// recipe.fetchAll = callback => {
//   $.get('/result')
//   .then(
//     results => {
//       if (results.length) {
//         recipe.loadAll(results);
//         callback();
//       } else {
//         $.getJSON(localStorage.recipe)
//         .then(rawData => {
//           rawData.forEach(item => {
//             let recipe = new recipe(item);
//             recipe.insertRecord();
//           })
//         })
//         .then(() => recipe.fetchAll(callback))
//         .catch(console.error);
//       }
//     }
//   )
// };
