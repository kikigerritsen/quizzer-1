module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    gitadd     : require('./.grunt-tasks/gitadd'),
    gitcommit  : require('./.grunt-tasks/gitcommit'),
    gitpush    : require('./.grunt-tasks/gitpush'),
    open       : require('./.grunt-tasks/open')
  });
  grunt.registerTask('postdeploy', [
    'gitadd', 'gitcommit', 'gitpush', 'open:prod'
  ]);
  grunt.registerTask('deploy',
    'setting environment to production and deploying to heroku',
    function(){
      process.env.NODE_ENV = 'production';
      grunt.task.run('postdeploy');
  });
};
