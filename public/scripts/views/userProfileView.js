'use strict';

(function(module) {
  const userProfileView = {};

  userProfileView.init = () => {
    // hide all sections in Main
    $('main section').hide();
    // show proper intro message, depending if user is returning user
    if (localStorage.recipeData) {
      $('.returning-visit').fadeIn();
      $('button .returning-visit').on('click', function(){
        console.log('returning visit button clicked');
        if (this.text() === 'YES') {
          $('main section').hide();
          $('.keyword-prompt').fadeIn();
          // skip the health and diet prompt and go to the keyword prompt.
        } else if (this.text() === 'NO') {
            console.log('clear localStorage button clicked');
          $('main section').hide();
          $('.health-and-diet-prompt').fadeIn();
        }
      });
    } else {
      console.log('local storage was empty');
      $('.first-visit, .health-and-diet-prompt').fadeIn();
    }
    $('.health-and-diet-prompt button').on('click', function(){
      console.log($(this));
      if ($(this).text() === 'YES') {
        console.log('YES was clicked');
        $('main section').hide();
        $('.health-restrictions').fadeIn();
        $('#health-check-submit').on('click', function(event) {
            event.preventDefault();
            $('.health-check:checked').each(function(){
              UserProfile.health.push($(this).val());
              })
            // userProfileController.addUserProfileToLocalStorage();
            $('main section').hide();
            $('.diet-restrictions').fadeIn();
            $('#diet-input').submit(function(event){
              event.preventDefault();
              $('#diet-check-submit').on('click', function(event) {
                event.preventDefault();
                $('.diet-check:checked').each(function(){
                  UserProfile.diet.push($(this).val());
            })
            userProfileController.addUserProfileToLocalStorage();
          })
        });
      });


      } else if ($(this).text() === 'NO') {
        $('main section').hide();
        $('.keyword-prompt').fadeIn();
      }
    });
  };

  $('#keyword-input').submit(function(event){
    event.preventDefault();
  });

  $('#keyword-submit').on('click', function(event) {
    event.preventDefault();
    $('.keyword-entry').each(function(){
      if($(this).val().length) {
          UserProfile.keyword.push($(this).val());
      }
    })
  });

  module.userProfileView = userProfileView;
})(window);
