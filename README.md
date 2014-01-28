# grunt-require-config
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

_Run this task with the `grunt tvm_tsc` command._

## Usage Examples

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

## Options
### ignore
+ Type: `Array`
+ Default: []
+ Require ignore files
+ Default: 'commonjs'
+ Specify module code generation: "commonjs" (default) or "amd"

### declaration
+ Type: `Boolean`
+ Default: false
+ Generates corresponding .d.ts file
