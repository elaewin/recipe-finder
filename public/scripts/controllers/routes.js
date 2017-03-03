'use strict';

page('/*', userProfileView.init);
page('/about', aboutController.init);
page('/recipe/', recipeController.loadAll);
page('/edamam', edamamDataController.requestData);
page();
