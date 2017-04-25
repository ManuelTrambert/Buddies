'use strict';
angular.module('main')
.controller('DebugCtrl', function ($log, $http, $timeout, Main, $cordovaDevice) {

  $log.log('Hello from your Controller: DebugCtrl in module main:. This is your controller:', this);

});
