'use strict';


// page('/about', aboutController.init);

// ingredientName will be an array that will contain all the food ingredient that the user put into the url field.
// page('/recipe/:ingredientName', recipeController.loadAll);
page('/edamam', edamamDataController.requestData);
page();
