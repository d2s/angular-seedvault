
var gulp = require('gulp'),
    watch = require('gulp-watch'),    // Watch changes and new files
    livereload = require('gulp-livereload'), // reload server on changes
    concat = require('gulp-concat'),  // Concatenates files together
    rimraf = require('rimraf'),       // Cleans folders
    mainBowerFiles = require('main-bower-files'),

    DEST = './dist',
    SOURCE = './client',
    EXCLUDE = '!./client/bower_components/';

var FILES_SCRIPTS_APP = [ SOURCE + '/**/*.js', EXCLUDE, EXCLUDE+'/**'],
    FILES_STYLES = [ SOURCE + '/**/*.css', EXCLUDE, EXCLUDE+'/**'],
    FILES_ASSETS = [ SOURCE + '/**/assets/*.*', EXCLUDE, EXCLUDE+'/**'],
    FILES_HTML = [ SOURCE + '/**/*.html', EXCLUDE, EXCLUDE+'/**'],
    BOWER_COMPONENTS = './client/bower_components/**';


gulp.task('clean:dist', function(cb) {
    rimraf(DEST, cb);
});

// Starts once clean:dist has been finished
gulp.task('build:scripts:app', function() {
  return gulp.src(FILES_SCRIPTS_APP)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(DEST))
    .pipe(livereload())
    ;
});

gulp.task('watch', function() {
  gulp.watch(FILES_SCRIPTS_APP, ['build:scripts:app']);
  gulp.watch(BOWER_COMPONENTS, ['build:scripts:vendor']);
  gulp.watch(FILES_STYLES, ['build:styles']);
  gulp.watch(FILES_HTML, ['build:html']);
});

// watch({glob: FILES_SCRIPTS_APP}, function() {
//     gulp.start('build:scripts:vendor');
// });


gulp.task('build:scripts:vendor', function() {
  return gulp.src(mainBowerFiles(/* options */))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(DEST))
    .pipe(livereload())
    ;
});

// watch({glob: BOWER_COMPONENTS}, function() {
//     gulp.start('build:scripts:vendor');
// });


gulp.task('build:scripts', ['build:scripts:vendor', 'build:scripts:app']);


gulp.task('build:styles', function() {
  return gulp.src(FILES_STYLES)
    .pipe(gulp.dest(DEST))
    .pipe(livereload())
    ;
});

// watch({glob: FILES_STYLES}, function() {
//     gulp.start('build:styles')
//     ;
// });



gulp.task('build:assets', function() {
  return gulp.src(FILES_ASSETS)
    .pipe(gulp.dest(DEST))
    .pipe(livereload())
    ;
});

// watch({glob: FILES_ASSETS}, function() {
//     gulp.start('build:assets');
// });


gulp.task('build:html', function() {
  return gulp.src(FILES_HTML)
    .pipe(gulp.dest(DEST))
    .pipe(livereload())
    ;
});

// watch({glob: FILES_HTML}, function() {
//     gulp.start('build:html');
// });


// Compile all assets to /dist
gulp.task('build:dist', [
  'build:scripts',
  'build:html',
  'build:styles',
  'build:assets'
]);

gulp.task('build', ['build:dist'], function() {
  gulp.run('watch');
});


