(function(){
  'use strict';
  module.exports = {
    dev : {
      path: 'http://localhost:<%=express.options.port%>'
    },
    prod : {
      path: 'http://dwa-quizzer.herokuapp.com'
    }
  };
}());
