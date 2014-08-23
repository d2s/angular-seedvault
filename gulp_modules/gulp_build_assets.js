var gulp = require('gulp'),                      // build system
    livereload = require('gulp-livereload'),     // gulp pipes for livereload
    lazypipe = require('lazypipe'),              // better gulp pipe reusability
    embedlr = require('gulp-embedlr'),           // livereload browser-snippet injector
    jade = require('gulp-jade'),                 // compile jade to html
    stylus = require('gulp-stylus'),             // compile styl to css
    rimraf = require('rimraf'),                  // clean dist / folder
    plumber = require('gulp-plumber'),           // keeps pipes working after error events
    gutil = require('gulp-util'),                // Gulp utils. Used here to beep on failed jade & sass compilation
    wait = require('gulp-wait'),                 // Sometimes .pipe(wait(100)) might be neede before livereload task
    gulpif = require('gulp-if'),
    config = require('./config.js');

var paths = config.paths;

//var liveReloadServer = tinylr();

// wait 10 milliseconds before reloading. If Livereload keeps failing, try increasing this
var refreshBrowser = lazypipe()
                        .pipe(wait, 10)
                        .pipe(livereload);


var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task('build', ['clean'], function () {
    gulp.start('build:assets');
});

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('build:assets', ['build:jade',
                           'build:html',
                           'build:css',
                           'build:styl',
                           'build:scripts',
                           'build:json',
                           'build:scripts:bower',
                           'build:fonts',
                           'build:images']);


gulp.task('build:styl', function () {
    return gulp.src(paths.styl)
        .pipe(plumber({errorHandler: onError}))
        .pipe(stylus())
        .pipe(gulp.dest(paths.dist))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:css', function () {
    return gulp.src(paths.css)
        .pipe(plumber({errorHandler: onError}))
        .pipe(gulp.dest(paths.dist))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});


gulp.task('build:json', function() {
    gulp.src(paths.json, {base: 'client/scripts'})
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:scripts:bower', function() {
    gulp.src(paths.bowerJs, {base: 'client/bower_components'})
        .pipe(gulp.dest('dist/bower_components/'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:scripts', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest(paths.dist))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:react', function () {
    return gulp.src(paths.react)
        .pipe(plumber({errorHandler: onError}))
        .pipe(react())
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:jade', function () {
    return gulp.src(paths.jade)
        .pipe(plumber({errorHandler: onError}))
        .pipe(jade({ pretty: true }))
        .pipe(gulpif(config.LIVERELOAD_ENV, embedlr()))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist'))
});


gulp.task('build:html', function () {
    return gulp.src(paths.html)
        .pipe(gulpif(config.LIVERELOAD_ENV, embedlr()))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});

gulp.task('build:images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.LIVERELOAD_ENV, refreshBrowser()));
});


