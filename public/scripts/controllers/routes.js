'use strict';

page('/', userProfileView.init);
page('/about', aboutController.init);
page('/recipe', recipeController.renderAll);
page('/edamam', edamamDataController.requestData);
page();
