var gulp = require('gulp'),
    requireDir = require('require-dir');

// gulp tasks are split into modules
requireDir('./gulp_modules', { recurse: true });

// By default, ompile assets and keep server alive
gulp.task('default', ['serve']);

gulp.task('serve', ['build', 'serve:keepalive']);

// Build on heroku
gulp.task('heroku:production', ['build']);

