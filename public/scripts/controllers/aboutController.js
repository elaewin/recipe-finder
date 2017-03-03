'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('main section').hide();
    $('.about-us-view').fadeIn();
  }

  module.aboutController = aboutController;
})(window)
