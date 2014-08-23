
var gulp = require('gulp'),
    run = require('gulp-run'),                       // Run shell task from gulp
    nodemon = require('gulp-nodemon'),               // Keep server alive and restart it on file change
    watch = require('gulp-watch'),            // watch file changes and new files
    livereload = require('gulp-livereload'),
    config = require('./config.js');


/*
 *  Restarts server on crash or file change
 *  Builds project again on restart         */

 function refreshBrowser () {
    setTimeout(function () {
        livereload();
    }, 2000);
 }

gulp.task('serve:keepalive', function () {
    nodemon({
        watch: config.paths.restart,
        script: config.paths.expressApp,
        ext: 'js',
        env: { 'NODE_ENV': config.LOCAL_ENV },
        verbose : false
    }).on('start', function () {
        console.log('--- Starting Express and building assets ---');
        if(config.LIVERELOAD_ENV) { refreshBrowser(); }
    }).on('restart', function () {
        console.log('--- Restarting  ---');
        gulp.start('build');
        if(config.LIVERELOAD_ENV) { refreshBrowser(); }
    }).on('crash', function () {
        console.log('--- Server crashed ---');
    });

});

// TODO add node env
gulp.task('serve:once', function () {
  run('node '+ EXPRESS_APP).exec();
});


gulp.task('watch', function () {
    livereload.listen();
    watch({glob: config.paths.html}, ['build:html']);
    watch({glob: config.paths.stylWatch}, ['build:styl']);
    watch({glob: config.paths.css}, ['build:css']);
    watch({glob: config.paths.jade}, ['build:jade']);
    watch({glob: config.paths.json}, ['build:json']);
    watch({glob: config.paths.images}, ['build:images']);
    watch({glob: config.paths.js}, ['build:scripts']);
    watch({glob: config.paths.bowerJS}, ['build:bower']);
});


