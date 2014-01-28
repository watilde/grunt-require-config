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

  // Load this plugin's task(s).
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['require_config', 'jshint']);
};
