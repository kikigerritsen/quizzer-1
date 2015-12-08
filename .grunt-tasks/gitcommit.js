(function(){
  'use strict';
  module.exports = {
    your_target: {
      options: {
        message : 'heroku deploy',
        allowEmpty: true //In case of no changes since last dev build...
      },
      files: {
        src: ["."]
      }
    }
  };
}());
