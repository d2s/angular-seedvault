var gulp = require('gulp'),
    requireDir = require('require-dir');

/*  USAGE
 *  'gulp' to build assets, start server, and keep it alive, and refresh browser automatically yon file change
 *  'gulp build' to compile assets to dist/folder
 *  'gulp serve:once to start server without automatic restarting'
 *  edit ./gulp_tasks/config.js to configure asset pipeline                                                     */

requireDir('./gulp_modules', { recurse: true });

// Watch builds assets on start
// serve:keepalive rebuilds assets on server restart
gulp.task('serve', ['serve:keepalive', 'watch']);
gulp.task('default', ['serve']);

// Heroku Buildbacks run one of these after receiving a push
gulp.task('heroku:production', ['build']);
gulp.task('heroku:build', ['build']);


console.log('Gulping in ' + process.env.NODE_ENV + ' environment.');
if (process.env.NODE_ENV === undefined) {
  console.log('Assuming development environment')
}

