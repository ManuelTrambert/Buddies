'use strict';
// gulp
var gulp = require('gulp');
var options = gulp.options;
// modules
var bs = require('browser-sync').create('m-ionic');
var Proxy = require('./Proxy');

var bsInit = function (bsOptions, cb) {
  // console.log('proxy', options.proxy);
  // console.log('bsinit', bsOptions)
  if (options.proxy) {
    if (!bsOptions.server) {
      bsOptions.server = {};
    }
    bsOptions.server.middleware = Proxy();
  }
  if (options.open === false) {
    bsOptions.open = false;
  }
  bs.init(bsOptions, cb);
};

module.exports = {
  init: bsInit,
  bs: bs
};
