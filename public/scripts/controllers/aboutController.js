'use strict';

(function () {

const aboutController = {};

  function aboutController.init () {
    // hide all sections, replace "class-hide" with whatever class will hide the tags
    $('main section').hide();
    //reveal specific section with the id="about-us-view"
    $('#about-us-view').show();
  }

  module.aboutController = aboutController;

})(window)
