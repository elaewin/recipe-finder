'use strict';
(function(module) {
  // const userProfile = {};
// user profile constructor
function UserProfile (object) {
  this.health = object.health;
  this.diet = object.diet;
  this.keyword = object.keyword
}

UserProfile.health = [];
UserProfile.diet = [];
UserProfile.keyword = [];

module.UserProfile = UserProfile;
})(window);
