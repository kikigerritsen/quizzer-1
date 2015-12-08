(function(){
  'use strict';
  module.exports = {
    heroku: {
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
