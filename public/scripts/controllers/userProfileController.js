'use strict';



// function user(obj) {
//   health: obj.health;  // allergies array
//   dietary: obj.dietary; // preferred diet array
//   ingredients: obj.ingredients[];// array of ingredients
// }

let user = {};


user.queryHealthAndDiet(){
  // call showDiet choices
  user.showDiet();
  // call showHealth choices
  user.showHealth();
}

user.showDiet(){
  // radial list of diet
 //  <form id="show-diet">
 //   <input type="radio"  value="first diet choice" checked> Male<br>
 //   <input type="radio"  value="second diet choice"> Female<br>
 //   <input type="radio"  value="third diet choice"> Other
 // </form>
//
   let user.dietary = [];
  $('#show-diet').on('checked', function() {
    user.dietary.push(value);
  })
}

user.showHealth(){
  // radial list of health choices
  //  <form id="show-diet">
  //   <input type="radio"  value="first health choice" checked> Male<br>
  //   <input type="radio"  value="second health choice"> Female<br>
  //   <input type="radio"  value="third health choice"> Other
  // </form>
  let user.health = [];
  $('#Health-form-id-name').on('checked', function() {
    user.health.push(value);
  })
}

user.getIngredients(){
  // simple form that has a submit
  // will be hardcoded in index in a "form" element
    //   <form action="/action_page.php" method="get">
    //  Ingredient List: <input type="text" name="fname"><br>
    //   <input type="text" name="lname"><br>
    //  <input type="submit" value="Submit">
    // </form>
  let user.ingredientsArray = [];
  user.ingredientsArray.forEach(i => push(i));

}




// $.ajax({
//   url: `curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"`,
//   method: 'GET',
//   data: {
//     author: this.author,
//     authorUrl: this.authorUrl,
//     body: this.body,
//     category: this.category,
//     publishedOn: this.publishedOn,
//     title: this.title}
// });
