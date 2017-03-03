'use strict';

(function(module) {
  const userProfileView = {};

  userProfileView.init = () => {
    console.log('User profile.init running');
    // hide all sections in Main
    $('main section').hide();
    // show proper intro message, depending if user is returning user
    if (localStorage.keyword) {
      $('.returning-visit').fadeIn();
      $('button .returning-visit').on('click', function(){
        console.log('returning visit button clicked: ', this.text);
        if (this.text() === 'YES') {
          $('main section').hide();
          $('.keyword-prompt').fadeIn();
          // skip the health and diet prompt and go to the keyword prompt.
        } else if (this.text() === 'NO') {
            console.log('clear localStorage button clicked: ', this.text);
          $('main section').hide();
          $('.health-and-diet-prompt').fadeIn();
        }
      });
    } else {
    console.log('local storage was empty');
    $('.first-visit, .health-and-diet-prompt').fadeIn();
    };
  };

  $('.health-and-diet-prompt button').on('click', function() {
    console.log($(this));
    if ($(this).text() === 'YES') {
      console.log('YES was clicked');
      $('main section').hide();
      $('.health-restrictions').fadeIn();
    }
  });

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
    });
  });

  // $('#diet-check-submit').on('click', function(event) {
  //   event.preventDefault();
  //   $('.diet-check:checked').each(function(){
  //     UserProfile.diet.push($(this).val());
  // });

  $('#diet-check-submit').on('click', function(event) {
    event.preventDefault();
    $('.diet-check:checked').each(function() {
      UserProfile.diet = [];
      UserProfile.diet.push($(this).val());
    });
    $('main section').hide();
    $('.keyword-prompt').fadeIn();
  });

  $('#keyword-submit').on('click', function(event) {
    event.preventDefault();
    $('.keyword-entry').each(function() {
      if($(this).val().length) {
        // UserProfile.keyword = [];
       console.log(UserProfile.keyword);
       UserProfile.keyword.push($(this).val());
       console.log(UserProfile.keyword);
      }
    });
    userProfileController.addUserProfileToLocalStorage();
    edamamDataController.requestData();
  });

  $('#keyword-input').submit(function(event){
    event.preventDefault();
  });

  module.userProfileView = userProfileView;
})(window);
