'use strict';
angular.module('main')
  .controller('RegisterCtrl', function ($scope, $log, $http, $timeout, $state) {

    $scope.user = {};

    $scope.register = function () {
      console.log($scope.user);
      if ($scope.user.password !== $scope.user.confirmPassword) {
        $scope.message = 'vos mots de passe ne correspondent pas.';
        $timeout(function () {
          $scope.message = '';
        }, 2000);
      } else if (!$scope.user.email) {
        $scope.message = 'Vous n\'avez pas renseigné votre email correctement.';
        $timeout(function () {
          $scope.message = '';
        }, 2000);
      } else if (!$scope.user.password || !$scope.user.email || !$scope.user.username) {
        $scope.message = 'Vous n\'avez pas rempli tout les champs requis';
        $timeout(function () {
          $scope.message = '';
        }, 2000);
      } else {
        $http.post('/api/users/signup', $scope.user)
          .then(function (response) {
            console.log(response);
            $scope.user = {};
            $timeout(function () {
              $state.go('login');
            }, 500);
          }, function (error) {
            $scope.message = 'Une erreur est survenue lors de la création de votre compte. Merci de réessayer plus tard';
            $timeout(function () {
              $scope.message = '';
            }, 2000);
          })
      }
    };
  });
