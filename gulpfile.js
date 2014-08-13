var gulp = require('gulp'),
    liverelod = require('gulp-livereload'),
    requireDir = require('require-dir');

// gulp tasks are split into modules
requireDir('./gulp_modules', { recurse: true });

// By default, compile assets and keep server alive
gulp.task('default', ['build', 'serve']);

gulp.task('serve', ['serve:once']);
