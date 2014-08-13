
var gulp = require('gulp'),
    run = require('gulp-run')
    DIST = './dist',
    FILES_SERVER_RESTART = ['server', 'gulp_modules',  'gulpfile.js',]
    EXPRESS_APP = 'server/app.js';

gulp.task('serve:once', function () {
  run('node '+ EXPRESS_APP).exec();
});

