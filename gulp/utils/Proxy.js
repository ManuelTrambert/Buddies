/**
 * Created by martindonadieu on 26/10/2016.
 */
var chalk = require('chalk');
var gulp = require('gulp');
var options = gulp.options;

var createProxy = function () {
  var url = require('url');
  var proxyMiddleware = require('proxy-middleware');
  var process = require('process');
  var path = require('path');
  var proxyConfs = require(path.join(process.cwd(), 'app/main/constants/env-' + options.env + '.json'))['proxies'];

  console.log('[' + chalk.green('proxy') + '] ' + chalk.bold('Proxy Configuration:'));
  console.log(chalk.dim(' ---------------------------------------'));
  var middleware = [];
  for (var proxyConf, i = 0; (proxyConf = proxyConfs[i]); i++) {
    var proxyOptions = url.parse(proxyConf.proxyMapTo);
    proxyOptions.route = proxyConf.proxyMapFrom;

    middleware.push(proxyMiddleware(proxyOptions));

    console.log('   Map From: ' + chalk.green(proxyConf.proxyMapFrom));
    console.log('     Map to: ' + chalk.green(proxyConf.proxyMapTo));
    console.log(chalk.dim(' ---------------------------------------'));
  }
  return middleware;
};

module.exports = createProxy;
