'use strict';

(function(module) {
  const userProfileView = {};

  // userProfileView.index = () => {
  //   $('main section').hide();

    // show proper intro message, depending if user is returning user
    // if (/*function to check localStorage*/) {
    //   $('.returning-visit').fadeIn();
    //   $('button.returning-visit').on('click', function(){
    //     if (this.text() === 'YES') {
    //       $('main section').hide();
    //       $('#keyword-prompt').fadeIn();
    //       // DONE write code skip the health and diet prompt to the keyword prompt.
    //     } else if (this.text() === 'NO') {
    //       $('main section').hide();
    //       $('#health-and-diet-prompt')fadeIn();
    //     }
    //   })







  //         $('main section').hide();
  //         $('#health-and-diet-prompt').fadeIn();
  //           if (this.text) {
  //             $('button#health-yes').on('click', function(){
  //               $('main section').hide();
  //               $('#health-and-diet').fadeIn();
  //             } else {
  //               $('main section').hide();
  //               $('#keyword-prompt').fadeIn();
  //             })
  //
  //           }
  //         // DONE write code to proceed to health and diet prompt
  //       }
  //     })
  //   } else {
  //     $('#first-visit').show();
  //   }
  //   $('#health-and-diet-prompt').on('click', function(){
  //     if (this.text() === 'YES') {
  //       // TODO: write code to proceed to health and diet
  //     } else {
  //       // TODO: write code to skip to the ingredient/keyword prompt
  //     }
  //   })
  // };
  $('#health-input').submit(function(event){
    event.preventDefault();
  });

  $('#health-check-submit').on('click', function(event) {
    event.preventDefault();
    $('.health-check:checked').each(function(){
       UserProfile.health.push($(this).val());
    })
  });

  $('#diet-input').submit(function(event){
    event.preventDefault();
  });

  $('#diet-check-submit').on('click', function(event) {
    event.preventDefault();
    $('.diet-check:checked').each(function(){
       UserProfile.diet.push($(this).val());
    })
  });

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





  // $('.keyword-prompt button').on('click', function() {
  //   $('#keyword-form').find(':input').each(function(){
  //   UserProfile.keyword.push($(this).val());
  // });
  // });

  module.userProfileView = userProfileView;
})(window);
