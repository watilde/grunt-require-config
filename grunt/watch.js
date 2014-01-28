module.exports = {
  index: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 3000
    },
    files: ['src/index.html'],
    tasks: ['htmlmin:index'],
  },
  tpl: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 3000
    },
    files: ['src/tpl/*.html'],
    tasks: ['jst', 'uglify:tpl'],
  },
  css: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 3000
    },
    files: ['src/css/*.css'],
    tasks: ['concat:css'],
  },
  app: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 3000
    },
    files: ['src/js/**/*.js'],
    tasks: ['concat:app', 'jshint:app', 'uglify:app'],
  }
};
