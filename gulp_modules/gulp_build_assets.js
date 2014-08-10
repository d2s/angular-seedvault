
var gulp = require('gulp'),
    concat = require('gulp-concat'),  // Concatenates files together
    rimraf = require('rimraf'),       // Cleans folders
    mainBowerFiles = require('main-bower-files'),

    DEST = './dist',
    SOURCE = './client',
    EXCLUDE = '!./client/bower_components';

var FILES_SCRIPTS_APP = [ SOURCE + '/**/*.js', EXCLUDE],
    FILES_STYLES = [ SOURCE + '/**/*.css', EXCLUDE],
    FILES_ASSETS = [ SOURCE + '/**/assets/*.*', EXCLUDE],
    FILES_HTML = [ SOURCE + '/**/*.html', EXCLUDE];


console.log(mainBowerFiles());
console.log(process.env.NODE_ENV);

gulp.task('clean:dist', function(cb) {
    rimraf(DEST, cb);
});

// Starts once clean:dist has been finished
gulp.task('build:scripts:app', ['clean:dist'], function() {
  return gulp.src(FILES_SCRIPTS_APP)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(DEST));
});

gulp.task('build:scripts:vendor', ['clean:dist'], function() {
  return gulp.src(mainBowerFiles(/* options */))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(DEST));
});

gulp.task('build:scripts', ['build:scripts:vendor', 'build:scripts:app']);


gulp.task('build:styles', ['clean:dist'], function() {
  return gulp.src(FILES_STYLES)
    .pipe(gulp.dest(DEST));
});

gulp.task('build:assets', ['clean:dist'], function() {
  return gulp.src(FILES_ASSETS)
    .pipe(gulp.dest(DEST));
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

