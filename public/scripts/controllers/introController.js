'use strict';

(function(module) {
  const introController = {};

  introController.index = () => {
    $('main section').hide();
    $('#intro').show().children().hide();

    // show proper intro message, depending if user is returning user
    if (localStorage.rawData) {
      $('.returning-visit').show();
      $('buton.returning-visit').on('click', function(){
        if (this.text() === 'YES') {
          // TODO write code skip the health and diet prompt to the keyword prompt.
        } else {
          // TODO write code to proceed to health and diet prompt
        }
      })
    } else {
      $('#first-visit').show();
    }
  };

  module.introController = introController;
})(window);
