
var gulp = require('gulp'),
    concat = require('gulp-concat'),  // Concatenates files together
    rimraf = require('rimraf'),       // Cleans folders

    DEST = './dist',
    SOURCE = './client';

var FILES_SCRIPTS_APP = [ SOURCE + '/scripts/**/*.js', SOURCE + '/views/**/*.js'],
    FILES_SCRIPTS_VENDOR = [ SOURCE + '//vendor/angular/angular.js'],
    FILES_STYLES = [ SOURCE + '/styles/**/*.js', SOURCE + '/views/**/*.js'],
    FILES_ASSETS = [ SOURCE + '/assets/**/*.*', SOURCE + '/views/**/*.*'],
    FILES_HTML = [ SOURCE + '/.views/**/*.html'];


gulp.task('clean:dist', function(cb) {
    rimraf(DEST, cb);
});

// Starts once clean:dist has been finished
gulp.task('build:scripts:app', ['clean:dist'], function() {
  return gulp.src(FILES_SCRIPTS_APP)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(DEST + '/scripts'));
});

gulp.task('build:scripts:vendor', ['clean:dist'], function() {
  return gulp.src(FILES_SCRIPTS_VENDOR)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(DEST + '/scripts'));
});

gulp.task('build:scripts', ['build:scripts:vendor', 'build:scripts:app']);


gulp.task('build:styles', ['clean:dist'], function() {
  return gulp.src(FILES_STYLES)
    .pipe(gulp.dest(DEST + '/styles'));
});

gulp.task('build:assets', ['clean:dist'], function() {
  return gulp.src(FILES_ASSETS)
    .pipe(gulp.dest(DEST + '/assets'));
});

gulp.task('build:html', ['clean:dist'], function() {
  return gulp.src(FILES_HTML)
    .pipe(gulp.dest(DEST));
});

// Compile all assets to /dist
gulp.task('build', ['clean:dist',
  'build:scripts',
  'build:html',
  'build:styles',
  'build:assets'
]);

