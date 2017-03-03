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
      $('#return-yes').on('click', function(){
        console.log('user indicated returning visit to use local storage');
        $('main section').hide();
        $('.keyword-prompt').fadeIn();
      });
          // skip the health and diet prompt and go to the keyword prompt.
      $('#return-no').on('click', function(){
        console.log('clear localStorage button clicked: ', this.text);
        localStorage.clear();
        $('main section').hide();
        $('.health-and-diet-prompt').fadeIn();
      });

    } else {
    console.log('local storage was empty');
    $('.first-visit, .health-and-diet-prompt').fadeIn();
    };
  };

  $('#yes-button').on('click', function() {
    console.log('YES was clicked');
    $('main section').hide();
    $('.health-restrictions').fadeIn();
  });

  $('#no-button').on('click', function() {
    console.log('NO was clicked');
    $('main section').hide();
    $('.health-restrictions').fadeIn();
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
