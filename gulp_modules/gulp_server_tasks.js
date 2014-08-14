
var gulp = require('gulp'),
    run = require('gulp-run'),
    nodemon = require('gulp-nodemon'),
    DIST = './dist',
    FILES_SERVER_RESTART = ['server', 'gulp_modules',  'gulpfile.js',]
    EXPRESS_APP = 'server/app.js';

// Restarts server on crash or server file change
gulp.task('serve:keepalive', function () {
  nodemon({
    watch: [ FILES_SERVER_RESTART ],
    script: EXPRESS_APP,
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
  .on('restart', function () {
    console.log('restarted!');
  });
});


gulp.task('serve:once', function () {
  run('node '+ EXPRESS_APP).exec();
});

