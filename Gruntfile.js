module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    require_config: {
      all: {
        options: {
          ignore: ['grunt/trush']
        },
        src: 'grunt'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test', ['require_config', 'jshint']);
  grunt.registerTask('default', ['require_config', 'watch']);
};
