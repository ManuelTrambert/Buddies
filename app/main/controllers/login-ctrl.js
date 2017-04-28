'use strict';
angular.module('main')
  .controller('LoginCtrl', function ($scope, $log, $http, $state, $timeout) {

    $scope.user = {};

    $scope.signIn = function () {
      $http.post('/api/users/me', $scope.user)
        .then(function () {
          $scope.user = {};
          $state.go('main.dashboard');
        }, function () {
          $scope.message = 'Email ou mot de passe incorrect';
          $timeout(function () {
            $scope.message = '';
          }, 2000);
        })
    }
  });
