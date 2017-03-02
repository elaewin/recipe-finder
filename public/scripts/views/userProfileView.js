'use strict';

(function(module) {
  const userProfileController = {};

  userProfileController.index = () => {
    $('main section').hide();

    // show proper intro message, depending if user is returning user
    if (/*function to check localStorage*/) {
      $('.returning-visit').fadeIn();
      $('button.returning-visit').on('click', function(){
        if (this.text() === 'YES') {
          $('main section').hide();
          $('#keyword-prompt').fadeIn();
          // DONE write code skip the health and diet prompt to the keyword prompt.
        } else if (this.text() === 'NO') {
          $('main section').hide();
          $('#health-and-diet-prompt')fadeIn();
        }
      })







          $('main section').hide();
          $('#health-and-diet-prompt').fadeIn();
            if (this.text) {
              $('button#health-yes').on('click', function(){
                $('main section').hide();
                $('#health-and-diet').fadeIn();
              } else {
                $('main section').hide();
                $('#keyword-prompt').fadeIn();
              })

            }
          // DONE write code to proceed to health and diet prompt
        }
      })
    } else {
      $('#first-visit').show();
    }
    $('#health-and-diet-prompt').on('click', function(){
      if (this.text() === 'YES') {
        // TODO: write code to proceed to health and diet
      } else {
        // TODO: write code to skip to the ingredient/keyword prompt
      }
    })
  };

  module.userProfileController = userProfileController;
})(window);


// *******************************************
$('input.health-and-diet').on('click', function() {
  push
})
