module.exports = function(grunt) {
  'use strict';
  var configObject = require('./grunt/config');
  var PACKAGE_JSON = grunt.file.readJSON("package.json");
  grunt.config.init(configObject);
  // Load Grunt Plugins
  Object.keys(PACKAGE_JSON.devDependencies).slice(1).forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['watch']);
};
