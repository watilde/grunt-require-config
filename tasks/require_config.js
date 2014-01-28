module.exports = function(grunt) {
  'use strict';
  var fs = require('fs');
  var path = require("path");
  var _ = grunt.util._;
  var taskName = 'require_config';
  var description = 'Keep Gruntfile.js simple, stupid';

  var taskFunction = function () {
    var options = this.options({
      ignore: []
    });
    var filesSrc = this.filesSrc;
    var list = _.reduce(filesSrc, function (memo, fileSrc) {
      var filePath = path.resolve(fileSrc) + '/';
      var files = fs.readdirSync(fileSrc);
      memo.push(files.map(function(file) { return filePath + file; }));
      return _.flatten(memo);
    }, []);

    options.ignore = _.map(options.ignore, function (item) {
      return path.resolve(item);
    });

    list = _.reduce(list, function (memo, item) {
      var status = true;
      item = item.replace('.js', '');
      options.ignore.forEach(function (ignore) {
        ignore = ignore.replace('.js', '');
        if (item === ignore) { status = false; }
      });
      if (status) { memo.push(item); }
      return memo;
    }, []);

    list.forEach(function(item) {
      var key = _.first(item.match(/(?!.*\/).+/));
      grunt.config.set(key, require(item));
    });
  };
  grunt.registerMultiTask(taskName, description, taskFunction);
};
