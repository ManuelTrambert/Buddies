'use strict';

(function () {

  var options = {};
  options.isCordovaApp = !!window.cordova;
  options.appUpToDate = true;
  options.loggedBefore = false;

  angular.module('main.constant', [])
    .constant('options', options);

})();
