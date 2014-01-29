# grunt-require-config
[![Build Status](https://travis-ci.org/watilde/grunt-require-config.png?branch=master)](https://travis-ci.org/watilde/grunt-require-config)

>Keep Gruntfile simple, stupid.

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-require-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-require-config');
```
Run this task with the ``grunt require_config`` command.

## Usage Examples
```
$ ls ./grunt
  jshint.js
  trash.js
```

### Gruntfile.js
```js
 module.exports = function(grunt) {
   'use strict';
   grunt.initConfig({
     require_config: {
       all: {
         options: {
           ignore: ['grunt/trush']
         },
         src: ['grunt']
       }
     }
   });
   grunt.loadNpmTasks('grunt-require-config');
   grunt.registerTask('default', ['require_config', 'jshint']);
 };
```

### grunt/jshint.js
```js
module.exports = {
  all: [
    'src/*.js'
  ]
};
```

## Properties
### src
+ Type: `Array || String`
+ Require directories

## Options
### ignore
+ Type: `Array`
+ Default: []
+ Require ignore files
