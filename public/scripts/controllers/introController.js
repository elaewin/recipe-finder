'use strict';

(function(module) {
  const introController = {};

  introController.index = () => {
    $('main section').hide();
    $('#intro').show().children().hide();

    // show proper intro message, depending if user is returning user
    if (localStorage.rawData) {
      $('#returning-visit').show();
    } else {
      $('#first-visit').show();
    }
  };

  module.introController = introController;
})(window);
