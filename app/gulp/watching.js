'use strict';
// gulp
var gulp = require('gulp');
var paths = gulp.paths;
var options = gulp.options;
// modules
var liveReload = require('./utils/Livereload');

// WATCH
gulp.task('watch', ['inject-all'], function () {

  var bsOptions = {
    open: true,
    server: {
      baseDir: ['app', '.tmp']
    }
  };
  // browser sync server
  liveReload.init(bsOptions);

  // start linting and watching
  gulp.start('linting');
  gulp.watch(paths.watchFiles, function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    if (event.type === 'changed') {
      liveReload.bs.reload();
      gulp.start('linting');
    }
    else { // added or deleted
      // inject in index (implicitly reloads)
      gulp.start('inject-all');
    }
  });
  // watch for changes in scss
  gulp.watch(paths.scssFiles, ['styles']);
  // watch for changes in css
  gulp.watch(paths.cssFiles, function () {
    liveReload.bs.reload();
  });
  // watch for changes in environment files and new config files
  gulp.watch([
    'app/main/constants/env-*.json',
    'app/*/constants/*config-const.js'
  ], ['environment']);
});

// WATCH-BUILD
var watchBuildDeps = [];
if (options.build !== false) {
  watchBuildDeps.push('build');
}
gulp.task('watch-build', watchBuildDeps, function () {
  var bsOptions = {
    open: false,
    server: {
      baseDir: ['app', '.tmp']
    }
  };
  // browser sync server
  liveReload.init(bsOptions);
  gulp.watch(paths.dist + '/**/*', function () {
    liveReload.bs.reload();
  });
});

// SERVE TASKS FOR PROTRACTOR
gulp.task('serve', ['inject-all'], function () {
  var bsOptions = {
    open: false,
    server: {
      baseDir: ['app', '.tmp']
    }
  };
  liveReload.init(bsOptions);
});
gulp.task('serve-build', ['build'], function () {
  var bsOptions = {
    open: false,
    server: {
      baseDir: ['app', '.tmp']
    }
  };
  liveReload.init(bsOptions);
});
